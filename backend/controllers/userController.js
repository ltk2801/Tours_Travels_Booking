const User = require("../models/User");

// update User
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete User
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

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
// getSignle User
exports.getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully fetch data",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
// getAll User
exports.getAllUser = async (req, res) => {
  // phân trang
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage) ? parseInt(req.query.perPage) : 8;
  try {
    const users = await User.find({})
      .skip(page * perPage)
      .limit(perPage);
    const totalUsers = await User.find({});

    res.status(200).json({
      success: true,
      total: totalUsers.length,
      perPage: users.length,
      message: "Successfully fetch data",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
