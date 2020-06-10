const express = require('express');
const router = express.Router();
const PosterController = require('../controllers/posters.controller');

const app = express();

router.route('/posters').get(PosterController.getPosters);

module.exports = router;