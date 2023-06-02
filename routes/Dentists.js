const express = require("express");
const router = express.Router();
const DentistsController = require("../controllers/DentistsController");
// const upload = require('../middlewares/upload');
// const authenticate = require('../middlewares/authenticate')


//get request or read

router.get("/", DentistsController.getAllDentists );

// Get request parametarized

router.get("/:id", DentistsController.getDentist);

// Post Request

router.post("/", 
// upload.single('Profile_pic'), 
DentistsController.createDentist);

//update


router.put("/", 
// upload.single('Profile_pic'), 
DentistsController.updateDentist);

// delete

router.delete("/",DentistsController.deleteDentist);

module.exports = router;