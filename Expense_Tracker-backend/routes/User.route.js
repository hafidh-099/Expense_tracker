const express = require("express");
const userController = require("../controllers/User.controller");

const userRoute = express.Router();

userRoute.post("/api/v1/user/register", userController.userRegistration);

module.exports = userRoute;
