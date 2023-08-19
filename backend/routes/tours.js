const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

// create new tour
router.post("/", tourController.createTour);

module.exports = router;
