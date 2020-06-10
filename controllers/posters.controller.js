const Poster = require('../models/posters.models');

exports.getPosters = async (req, res) => {
  try {
    res.json(await Poster.find());
  } catch {
    res.status(500).json({ message: err });
  }
}