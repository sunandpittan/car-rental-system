const vehicle = require("../vehicleSchema");

const createVehicle = async (req, res) => {
  const { model, year, rent, status } = req.body;
  const vehicleDetails = await vehicle.create({
    model,
    year,
    rent,
    status,
  });
  res.json("added");
};

const getVehicles = async (req, res) => {
  const getVhcls = await vehicle.find();
  res.json(getVhcls);
};

const getVehicle = async (req, res) => {
  const _id = req.params.id;
  const getVhcl = await vehicle.findOne({ _id });
  res.json(getVhcl);
};

const updateVehicle = async (req, res) => {
  const { model, year, rent, status } = req.body;
  const _id = req.params.id;
  const updateVehicles = await vehicle.findByIdAndUpdate(_id, {
    model,
    year,
    rent,
    status,
  });
  res.json("updated");
};

const deleteVehicle = async (req, res) => {
  const _id = req.params.id;
  const deleteVehicles = await vehicle.findByIdAndDelete(_id);
  res.json("deleted");
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
};
