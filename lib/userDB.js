const queryResult = require("../server");

async function getUsers() {
  try {
    const query = `select * from users`;
    const value = await queryResult.executeQuery(query);
    return value;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getUsers,
};
