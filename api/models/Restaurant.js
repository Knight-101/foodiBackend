const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
