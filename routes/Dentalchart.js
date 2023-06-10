const express = require("express");
const router = express.Router();

const dentalChartController = require("../controllers/DentalChartController");

//get request or read

router.get("/", dentalChartController.getAllDentalCharts );

// get request parametarized

router.get("/:id", dentalChartController.getDentalChart );
// Post Request

router.post("/", dentalChartController.createDentalChart);
//update


router.put("/", dentalChartController.updateDentalChart);

// delete

router.delete("/", dentalChartController.deleteDentalChart);
module.exports = router;
