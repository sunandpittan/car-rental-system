const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  model: { type: String },
  year: { type: String },
  rent: { type: String },
  status: { type: String },
});

const vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = vehicle;
