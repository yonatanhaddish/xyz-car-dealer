const { Pool } = require("pg");

// Create a new pool instance
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "Alpha",
  password: "071780",
  port: 5432, // Default PostgreSQL port
});

const config = {
  user: "postgres",
  host: "localhost",
  database: "Alpha",
  password: "071780",
  port: 5432, // Default PostgreSQL port
};

module.exports = { pool, config };
