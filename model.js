const mongoose = require('mongoose');


// Facilities schema and model
const facilitySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  type: String,
})
const Facility = mongoose.model('Facility', facilitySchema);


// Agent schema and model definition
const agentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});
const Agent = mongoose.model('Agent', agentSchema);

// shift schema and model definition
const shiftSchema = new mongoose.Schema({
  _id: String,
  facility: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Facility',
    index: true
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',
    index: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
});
const Shift = mongoose.model('Shift', shiftSchema);

module.exports = {
  Facility,
  Agent,
  Shift,
}