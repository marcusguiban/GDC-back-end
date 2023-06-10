const express = require("express");
const router = express.Router();

const AppointmetController = require("../controllers/AppointmentController");

//get request or read

router.get("/", AppointmetController.getAllAppointments );

// get request parametarized

router.get("/:id", AppointmetController.getAppointment );
// Post Request

router.post("/", AppointmetController.createAppointment);
//update


router.put("/", AppointmetController.updateAppointment);

// delete

router.delete("/", AppointmetController.deleteAppointment);
module.exports = router;
