const Tour = require("../models/Tour");

// create new tour
exports.createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

// update tour
exports.updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete tour
exports.deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};
// getSignle tour
exports.getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully fetch data",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
// getAll tour
exports.getAllTour = async (req, res) => {
  // phân trang
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage) ? parseInt(req.query.perPage) : 8;
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * perPage)
      .limit(perPage);
    const totalTours = await Tour.find({});

    res.status(200).json({
      success: true,
      total: totalTours.length,
      perPage: tours.length,
      message: "Successfully fetch data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};

// get tour by search
exports.getTourBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully fetch data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};

// get featured tour
exports.getFeaturedTour = async (req, res) => {
  // phân trang
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage) ? parseInt(req.query.perPage) : 8;
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .skip(page * perPage)
      .limit(perPage);
    const totalTours = await Tour.find({ featured: true });

    res.status(200).json({
      success: true,
      total: totalTours.length,
      perPage: tours.length,
      message: "Successfully fetch data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};

// GET TOURS COUNTS
exports.getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
