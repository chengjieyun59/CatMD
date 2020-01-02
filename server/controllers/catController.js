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

catController.addCat = (req, res, next) => {
  const text = `INSERT INTO catInfo(name, photoUrl, healthProblem, description)
  VALUES($1, $2, 'diabetes', $3) RETURNING *;`

  const { petName, petPhotoUrl, petDescription } = req.body;
  const values = [petName, petPhotoUrl, petDescription];

  db.query(text, values, (err, response) => {
    if (err) {
      return next(err);
    }
    const { rows } = response;
    res.locals.cat = rows;
    console.log('res.locals.cat: ', res.locals.cat);
    return next();
  });
}

module.exports = catController;