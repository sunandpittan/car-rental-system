const reservation = require("../reservationSchema");

const createReservation = async (req, res) => {
  const { model, year, rent, days, date, username } = req.body;
  const reservationDetails = await reservation.create({
    model,
    year,
    rent,
    days,
    date,
    username,
  });
  res.json("added");
};

const getReservations = async (req, res) => {
  const getRvsns = await reservation.find();
  res.json(getRvsns);
};

const getReservation = async (req, res) => {
  const id = req.params.id;
  const getRvsn = await reservation.find({ username: id });
  res.json(getRvsn);
};

const getAReservation = async (req, res) => {
  const _id = req.params.id;
  const getARvsn = await reservation.findOne({ _id });
  res.json(getARvsn);
};

const updateReservation = async (req, res) => {
  const { model, days, date } = req.body;
  const _id = req.params.id;
  const updateRvsn = await reservation.findByIdAndUpdate(_id, {
    model,
    days,
    date,
  });
  res.json("updated");
};

const deleteReservation = async (req, res) => {
  const _id = req.params.id;
  const deleteRvsn = await reservation.findByIdAndDelete(_id);
  res.json("deleted");
};

module.exports = {
  createReservation,
  getReservations,
  getReservation,
  getAReservation,
  updateReservation,
  deleteReservation,
};
