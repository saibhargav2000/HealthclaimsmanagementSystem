const { Pool } = require('pg');
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'claims_management',
  password: 'your-password',
  port: 5432,
});

module.exports = pool;
