const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  github: String,
  liveDemo: String
});

module.exports = mongoose.model("Project", ProjectSchema);