const express = require("express");
const { Pool } = require("pg");
const pool = require("./db");
const config = require("./db");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

async function executeQuery(query) {
  const pool = new Pool(config.config);
  try {
    await pool.connect();
    const result = await pool.query(query);
    return result.rows;

    console.log("herehrerhrerhreh");
  } catch (err) {
    throw err;
  }
}

exports.executeQuery = executeQuery;

// async function main(req, res, next) {
//     try {
//       const query = `select * from cars`;
//       const result = await executeQuery(query);

//       console.log("qqqqqqqqqqqqqqqq", result);

//       return result;
//     } catch (err) {
//       throw err;
//     }
//   }
//   main();
