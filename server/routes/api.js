const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router.get('/', catController.getCats, (req, res) => {
  return res.status(200).json(res.locals.cats);
});

module.exports = router;