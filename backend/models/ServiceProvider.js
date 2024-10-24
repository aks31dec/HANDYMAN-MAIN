const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  services: [String],  // e.g., ['plumbing', 'electrician']
  rating: { type: Number, default: 0 },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);
