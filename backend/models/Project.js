const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  description: String,
  socials: [{ site: String, url: String }],
  features: [String],
  skills: [String]
});

module.exports = mongoose.model('Project', projectSchema);
