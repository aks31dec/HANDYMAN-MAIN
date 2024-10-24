const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' },
    serviceType: String,
    bookingDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
