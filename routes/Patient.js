const express = require("express");
const router = express.Router();
const patientController = require("../controllers/PatientController");
const upload = require('../middlewares/upload');

//get request or read

router.get("/", patientController.getAllPatients );

// get request parametarized

router.get("/:id", patientController.getPatient );
// Post Request

router.post("/", patientController.createPatient);
//update


router.put("/", patientController.updatePatient);

router.put("/Change-password", patientController.changePassword);

// delete

router.delete("/", patientController.deletePatient);
module.exports = router;