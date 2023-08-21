const express = require("express");
const tourController = require("../controllers/tourController");

const { verifyAdmin, verifyToken } = require("../utils/verifyToken");

const router = express.Router();

////////////////// POST/PUT /////////////////
// create new tour
router.post("/", verifyToken, verifyAdmin, tourController.createTour);
// update tour
router.put("/:id", verifyToken, verifyAdmin, tourController.updateTour);

///////////////// DELETE ///////////////////////////////
// delete new tour
router.delete("/:id", verifyToken, verifyAdmin, tourController.deleteTour);

////////////////// GET ////////////////////////////////////////
// get single tour
router.get("/:id", tourController.getSingleTour);
// get All tour
router.get("/", tourController.getAllTour);
// get tours by search
router.get("/search/getTourBySearch", tourController.getTourBySearch);
router.get("/search/getFeaturedTours", tourController.getFeaturedTour);
router.get("/search/getTourCount", tourController.getTourCount);

module.exports = router;
