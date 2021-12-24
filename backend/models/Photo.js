const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: String,
  caption: String,
});
const photoSetSchema = new Schema({
  title: String,
  photos: [photoSchema],
});

module.exports = {
  Photo: mongoose.model('Photo', photoSchema),
  PhotoSet: mongoose.model('PhotoSet', photoSetSchema),
};
