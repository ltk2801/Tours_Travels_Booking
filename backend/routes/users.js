const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

const {
  verifyUser,
  verifyAdmin,
  verifyToken,
} = require("../utils/verifyToken");

////////////////// POST/PUT /////////////////

// update user
router.put("/:id", verifyToken, verifyUser, userController.updateUser);

///////////////// DELETE ///////////////////////////////
// delete new user
router.delete("/:id", verifyToken, verifyUser, userController.deleteUser);

////////////////// GET ////////////////////////////////////////
// get single user
router.get("/:id", verifyToken, verifyUser, userController.getSingleUser);
// get All user
router.get("/", verifyToken, verifyAdmin, userController.getAllUser);

module.exports = router;
