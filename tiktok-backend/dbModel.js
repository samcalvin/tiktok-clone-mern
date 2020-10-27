import mongoose from "mongoose";

// old style of importing without ES6
// const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);

// old style of exporting without ES6
// module.exports = mongoose.model("tiktokVideos", tiktokSchema);
  