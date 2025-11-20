const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Service title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Service description is required'],
        trim: true
    },
    icon: {
        type: String,
        default: 'default-icon'
    },
    features: [{
        type: String
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', serviceSchema);
