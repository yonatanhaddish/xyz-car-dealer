const carDB = require("../carsDB");

function getCars(callback) {
  carDB.getCars().then((data) => {
    callback(data);
  });
}

module.exports = {
  getCars,
};
