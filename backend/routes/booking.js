const express = require('express');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create Booking
router.post('/', authMiddleware, async (req, res) => {
    const { serviceProvider, serviceType, bookingDate } = req.body;
    try {
        const booking = new Booking({ user: req.user.id, serviceProvider, serviceType, bookingDate });
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Get User Bookings
router.get('/', authMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate('serviceProvider', 'user services');
        res.json(bookings);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
