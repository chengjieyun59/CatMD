const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router.get('/getData', catController.getCats, (req, res) => {
  return res.status(200).json(res.locals.cats);
});

router.post('/getData', catController.addCat, (req, res) => {
  return res.status(200).json(res.locals.cat);
});

router.delete('/getData', catController.deleteCat, (req, res) => {
  return res.status(200);
})

module.exports = router;