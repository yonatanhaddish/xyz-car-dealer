const carHelper = require("../../helpers/carHelper");

function getCars(req, res, next) {
  carHelper.getCars((data) => {
    res.json(data);
  });
}

module.exports = {
  getCars,
};
