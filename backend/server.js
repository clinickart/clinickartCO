const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');
const testimonialsRoutes = require('./routes/testimonials');

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(compression()); // Compress responses
app.use(morgan('dev')); // HTTP request logger
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Connect to database
connectDB();

// API v1 Routes
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/testimonials', testimonialsRoutes);

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'ClinicKart API is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        service: 'ClinicKart Backend'
    });
});

// API v1 info endpoint
app.get('/api/v1', (req, res) => {
    res.json({
        success: true,
        message: 'ClinicKart Backend API v1',
        version: process.env.API_VERSION || 'v1',
        endpoints: {
            health: '/api/v1/health',
            contact: '/api/v1/contact',
            services: '/api/v1/services',
            testimonials: '/api/v1/testimonials'
        }
    });
});

// Legacy health endpoint for compatibility
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'ClinicKart API is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        service: 'ClinicKart Backend'
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to ClinicKart API',
        version: process.env.API_VERSION || 'v1',
        endpoints: {
            'api-v1': '/api/v1',
            health: '/api/v1/health',
            contact: '/api/v1/contact',
            services: '/api/v1/services',
            testimonials: '/api/v1/testimonials'
        }
    });
});

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.path}`,
        availableEndpoints: {
            'api-v1': '/api/v1',
            health: '/api/v1/health',
            contact: '/api/v1/contact',
            services: '/api/v1/services',
            testimonials: '/api/v1/testimonials'
        }
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
