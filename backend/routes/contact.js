const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const emailService = require('../services/emailService');

// Validation middleware
const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
    body('phone')
        .optional()
        .trim(),
    body('reason')
        .optional()
        .trim(),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters')
];

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validateContact, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                errors: errors.array()
            });
        }

        const { name, email, phone, reason, message } = req.body;

        // Create new contact submission
        const contact = new Contact({
            name,
            email,
            phone,
            reason,
            message
        });

        await contact.save();

        // Send emails asynchronously
        try {
            // Send notification to admin
            await emailService.sendAdminNotification({
                name,
                email,
                phone,
                reason,
                message,
                createdAt: contact.createdAt
            });

            // Send acknowledgment to customer
            await emailService.sendCustomerAcknowledgment({
                name,
                email,
                reason
            });

            console.log('✅ Both admin notification and customer acknowledgment emails sent successfully');
        } catch (emailError) {
            console.error('❌ Email sending failed:', emailError);
            // Don't fail the API response if email fails, but log it
        }

        res.status(201).json({
            status: 'success',
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: {
                id: contact._id,
                createdAt: contact.createdAt
            }
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to submit contact form. Please try again later.'
        });
    }
});

// @route   GET /api/contact
// @desc    Get all contact submissions (Admin only - add auth middleware in production)
// @access  Private
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Fetch contacts error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch contacts'
        });
    }
});

// @route   GET /api/contact/:id
// @desc    Get single contact submission
// @access  Private
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        
        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: contact
        });
    } catch (error) {
        console.error('Fetch contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch contact'
        });
    }
});

// @route   PATCH /api/contact/:id
// @desc    Update contact status
// @access  Private
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: contact
        });
    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update contact'
        });
    }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact submission
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Contact deleted successfully'
        });
    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete contact'
        });
    }
});

module.exports = router;
