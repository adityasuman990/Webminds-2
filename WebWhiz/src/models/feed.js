const mongoose = require("mongoose");

const feed = new mongoose.Schema({
  
  feed: {
    type: String,
    required: true,
  },
});

const Feed = mongoose.model("Feedback", feed);

module.exports = Feed;
