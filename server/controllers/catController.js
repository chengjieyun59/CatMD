const db = require('../models/catModels');
const catController = {};

catController.getCats = (req, res, next) => {
  const text = `SELECT * FROM catInfo
  WHERE healthProblem = 'diabetes';`
  db.query(text, (err, response) => {
    if (err) {
      return next(err);
    }
    const { rows } = response;
    res.locals.cats = rows;
    console.log('res.locals.cats: ', res.locals.cats);
    return next();
  });
}

module.exports = catController;