const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// routes
const tourRoute = require("./routes/tours");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
