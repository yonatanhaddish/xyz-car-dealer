const express = require("express");
const router = express.Router();

const userRoutes = require("./user/index");
const carRoutes = require("./car/index");

router.get("/users", userRoutes.getUsers);

router.get("/cars", carRoutes.getCars);

module.exports = router;
