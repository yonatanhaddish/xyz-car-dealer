const userDB = require("../server/lib/userDB");

function getUsers(callback) {
  userDB.getUsers().then((data) => {
    callback(data);
  });
}

module.exports = {
  getUsers,
};
