const userHelper = require("../../helpers/userHelper");

function getUsers(req, res, next) {
  userHelper.getUsers((data) => {
    res.json(data);
  });
}

module.exports = {
  getUsers,
};
