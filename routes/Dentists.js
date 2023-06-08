const express = require("express");
const router = express.Router();
const DentistsController = require("../controllers/DentistsController");
const upload = require('../middlewares/upload');
// const authenticate = require('../middlewares/authenticate')

//get request or read
router.get("/Panapaan", DentistsController.getPanapaanDentists );
router.get("/Rosario", DentistsController.getRosarioDentists );
router.get("/Dasmarinas", DentistsController.getDasmarinasDentists );
router.get("/Carmona", DentistsController.getCarmonaDentists );
router.get("/Laspinas", DentistsController.getLaspinasDentists );
router.get("/Molino", DentistsController.getMolinoDentists );

router.get("/", DentistsController.getAllDentists );

// Get request parametarized

router.get("/:id", DentistsController.getDentist);

// Post Request

router.post("/", upload.single('profilePicture'),DentistsController.createDentist);
//update
router.put("/",upload.single('profilePicture'), DentistsController.updateDentist);

router.put("/Change-password/",upload.single('profilePicture'), DentistsController.changePassword);

router.put('/profile-pic/:id', upload.single('profilePicture'), DentistsController.updateProfilePic);

// delete

router.delete("/",DentistsController.deleteDentist);



module.exports = router;