const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
  poster: { type: String, required: true },
  size: { type: String, required: true }, 
  price: { type: Number, required: true },
  image: {type: String, required: true},
});

module.exports = mongoose.model('Poster', posterSchema);