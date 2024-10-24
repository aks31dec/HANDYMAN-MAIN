const express = require('express');
const ServiceProvider = require('../models/ServiceProvider');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create Service Provider
router.post('/', authMiddleware, async (req, res) => {
    const { services } = req.body;
    try {
        const serviceProvider = new ServiceProvider({ user: req.user.id, services });
        await serviceProvider.save();
        res.status(201).json(serviceProvider);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Get All Service Providers
router.get('/', async (req, res) => {
    try {
        const serviceProviders = await ServiceProvider.find().populate('user', 'name email');
        res.json(serviceProviders);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
