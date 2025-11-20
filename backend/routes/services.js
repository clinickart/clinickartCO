const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// @route   GET /api/services
// @desc    Get all active services
// @access  Public
router.get('/', async (req, res) => {
    try {
        const services = await Service.find({ isActive: true }).sort({ order: 1 });
        res.status(200).json({
            status: 'success',
            count: services.length,
            data: services
        });
    } catch (error) {
        console.error('Fetch services error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch services'
        });
    }
});

// @route   GET /api/services/:id
// @desc    Get single service
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        
        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: service
        });
    } catch (error) {
        console.error('Fetch service error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch service'
        });
    }
});

// @route   POST /api/services
// @desc    Create new service (Admin only - add auth middleware in production)
// @access  Private
router.post('/', async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();

        res.status(201).json({
            status: 'success',
            message: 'Service created successfully',
            data: service
        });
    } catch (error) {
        console.error('Create service error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to create service'
        });
    }
});

// @route   PUT /api/services/:id
// @desc    Update service
// @access  Private
router.put('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: service
        });
    } catch (error) {
        console.error('Update service error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update service'
        });
    }
});

// @route   DELETE /api/services/:id
// @desc    Delete service
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Service deleted successfully'
        });
    } catch (error) {
        console.error('Delete service error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete service'
        });
    }
});

module.exports = router;
