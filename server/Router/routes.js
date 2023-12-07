const express = require("express");
const router = express.Router();
const signIn = require("../Controller/signIn");
const signUp = require("../Controller/signUp");
const vehicleCrud = require("../Controller/vehicleCrud");
const reservationCrud = require("../Controller/reservationCrud");
const userCrud = require("../Controller/userCrud");

router.post("/signin", signIn);
router.post("/signup", signUp);

router.route("/viewusers").get(userCrud.getUsers);
router.route("/deleteuser/:id").delete(userCrud.deleteUser);

router.route("/addvehicle").post(vehicleCrud.createVehicle);
router.route("/viewvehicles").get(vehicleCrud.getVehicles);
router.route("/viewvehicle/:id").get(vehicleCrud.getVehicle);
router.route("/updatevehicle/:id").put(vehicleCrud.updateVehicle);
router.route("/deletevehicle/:id").delete(vehicleCrud.deleteVehicle);

router.route("/addreservation").post(reservationCrud.createReservation);
router.route("/viewreservations").get(reservationCrud.getReservations);
router.route("/viewreservation/:id").get(reservationCrud.getReservation);
router.route("/viewareservation/:id").get(reservationCrud.getAReservation);
router.route("/updatereservation/:id").put(reservationCrud.updateReservation);
router.route("/deletereservation/:id").delete(reservationCrud.deleteReservation);

module.exports = router;
