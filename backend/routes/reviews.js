const express = require("express");
const reviewController = require("../controllers/reviewController");

const { verifyUser, verifyToken } = require("../utils/verifyToken");

const router = express.Router();

// post
router.post("/:tourId", verifyToken, verifyUser, reviewController.createReview);
// router.post("/login", reviewController.);

module.exports = router;
