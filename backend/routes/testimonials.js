const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// @route   GET /api/testimonials
// @desc    Get all active testimonials
// @access  Public
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        console.error('Fetch testimonials error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch testimonials'
        });
    }
});

// @route   GET /api/testimonials/:id
// @desc    Get single testimonial
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        
        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: testimonial
        });
    } catch (error) {
        console.error('Fetch testimonial error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch testimonial'
        });
    }
});

// @route   POST /api/testimonials
// @desc    Create new testimonial (Admin only - add auth middleware in production)
// @access  Private
router.post('/', async (req, res) => {
    try {
        const testimonial = new Testimonial(req.body);
        await testimonial.save();

        res.status(201).json({
            status: 'success',
            message: 'Testimonial created successfully',
            data: testimonial
        });
    } catch (error) {
        console.error('Create testimonial error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to create testimonial'
        });
    }
});

// @route   PUT /api/testimonials/:id
// @desc    Update testimonial
// @access  Private
router.put('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: testimonial
        });
    } catch (error) {
        console.error('Update testimonial error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update testimonial'
        });
    }
});

// @route   DELETE /api/testimonials/:id
// @desc    Delete testimonial
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        console.error('Delete testimonial error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete testimonial'
        });
    }
});

module.exports = router;
