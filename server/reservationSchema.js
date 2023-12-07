const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  model: { type: String },
  year: { type: String },
  rent: { type: String },
  days: { type: String },
  date: { type: String },
  username: { type: String },
});

const reservation = mongoose.model("reservation", reservationSchema);

module.exports = reservation;
