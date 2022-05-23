const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: String,
  desc: String,
  category: String,
  price: String,
});

module.exports = mongoose.model("item", itemSchema);
