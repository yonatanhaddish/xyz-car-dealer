const userHelper = require("../../lib/helpers/userHelper");

function getUsers(req, res, next) {
  userHelper.getUsers((data) => {
    res.json(data);
  });
}

module.exports = {
  getUsers,
};
