const express = require("express");
const userController = require("../controllers/User.controller");
const isAuthenticated = require("../middleware/isAuthenticated");

const userRoute = express.Router();

userRoute.post("/api/v1/user/register", userController.register);
userRoute.post("/api/v1/user/login", userController.login);
userRoute.get("/api/v1/user/profile",isAuthenticated, userController.profile);
userRoute.post("/api/v1/user/update-password",isAuthenticated, userController.updatePassword);
userRoute.post("/api/v1/user/update-profile",isAuthenticated, userController.updateProfile);

module.exports = userRoute;
