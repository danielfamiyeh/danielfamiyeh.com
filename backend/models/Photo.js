const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  file: String,
  caption: String,
  dateUploaded: {
    type: String,
    default: new Date().toISOString()
  }
});
const photoSetSchema = new Schema({
  title: String,
  files: [String],
  cover: {
    type: Number,
    default: 0
  },
  dateUploaded: {
    type: String,
    default: new Date().toISOString()
  }
});

module.exports = {
  Photo: mongoose.model('Photo', photoSchema),
  PhotoSet: mongoose.model('PhotoSet', photoSetSchema)
};
