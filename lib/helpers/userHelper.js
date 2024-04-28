const userDB = require("../userDB");

function getUsers(callback) {
  userDB.getUsers().then((data) => {
    callback(data);
  });
}

module.exports = {
  getUsers,
};
