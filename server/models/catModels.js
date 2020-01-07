const { Pool } = require('pg');
const PG_URI = 'postgres://qywroyaw:ajOIhV9q-pkjPBRDsOKfAdrpwXzSVKlK@rajje.db.elephantsql.com:5432/qywroyaw';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}