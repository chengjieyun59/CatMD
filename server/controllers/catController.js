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
    return next();
  });
}

catController.editCat = (req, res, next) => {
  const text = `UPDATE catInfo
  SET description = $1
  WHERE name = $2 RETURNING *;`
  let index;
  for (let i = 0; i < req.body.isEditing.length; i += 1) {
    if (req.body.isEditing[i]) {
      index = i;
    }
  }
  const { description, name } = req.body.posts[index];
  const values = [description, name];
  db.query(text, values, (err, response) => {
    if (err) {
      return next(err);
    }
    const { rows } = response;
    res.locals.editedCat = rows;
    return next();
  });
}

catController.deleteCat = (req, res, next) => {
  const text = `DELETE FROM catInfo
  WHERE name = $1 RETURNING *;`
  const { name } = req.body;
  const values = [name];
  db.query(text, values, (err, response) => {
    if (err) {
      return next(err);
    }
    const { rows } = response;
    res.locals.deletedCat = rows;
    return next();
  });
}

module.exports = catController;