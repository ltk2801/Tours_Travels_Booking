const express = require("express");
const bookingController = require("../controllers/bookingController");

const {
  verifyUser,
  verifyToken,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// post
router.post("/", verifyToken, verifyUser, bookingController.createBooking);
// GET
router.get("/:tourId", verifyToken, verifyUser, bookingController.getBooking);

router.get("/", verifyToken, verifyAdmin, bookingController.getAllBooking);

module.exports = router;
