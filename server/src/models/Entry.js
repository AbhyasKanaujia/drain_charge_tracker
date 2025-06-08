const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  timeSlot: { type: String, required: true },
  activity: { type: String, required: true },
  feelingAfter: { type: String },
  type: { type: String, enum: ['C', 'D'], required: true },
  notes: { type: String }
}, { timestamps: true });  // adds createdAt and updatedAt

module.exports = mongoose.model('Entry', entrySchema);
