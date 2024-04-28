const queryResult = require("../../server");

async function getCars() {
  try {
    const query = `SELECT * FROM cars`;

    const value = queryResult.executeQuery(query);
    return value;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getCars,
};
