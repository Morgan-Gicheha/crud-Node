const mongoose = require("mongoose");

const PostSChema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type:Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSChema);
