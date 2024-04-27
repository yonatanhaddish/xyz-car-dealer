const express = require("express");
const { Pool } = require("pg");
const pool = require("./db");
const config = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function executeQuery(query) {
  const pool = new Pool(config.config);
  try {
    await pool.connect();
    const result = await pool.query(query);
    console.log("ttttttttttttttt");
    return result.rows;
  } catch (err) {
    throw err;
  }
}

async function main() {
  try {
    const query = `select * from cars`;
    const result = await executeQuery(query);
    console.log("ddddddddddddd", result);
    return result;
  } catch (err) {
    throw err;
  }
}
main();
