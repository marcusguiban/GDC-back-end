const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//get request or read

router.get("/", UserController.getAllUser );

// get request parametarized

router.get("/:id", UserController.getUser );
// Post Request

router.post("/", UserController.createUser);
//update


router.put("/", UserController.updateUser);

// delete

router.delete("/", UserController.deleteUser);
module.exports = router;
