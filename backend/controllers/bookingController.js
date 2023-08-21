const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to booking" });
  }
};

// GET 1 booking
exports.getBooking = async (req, res) => {
  const id = req.params.tourId;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully fetch data",
      data: book,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to fetch data" });
  }
};

// GET ALL BOOKING
exports.getAllBooking = async (req, res) => {
  // phân trang
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage) ? parseInt(req.query.perPage) : 8;
  try {
    const books = await Booking.find({})
      .skip(page * perPage)
      .limit(perPage);
    const totalBooks = await Booking.find({});

    res.status(200).json({
      success: true,
      total: totalBooks.length,
      perPage: books.length,
      message: "Successfully fetch data",
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
