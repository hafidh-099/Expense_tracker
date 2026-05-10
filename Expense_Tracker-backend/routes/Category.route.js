const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const Categories = require("../controllers/Categories.controller");

const categoryRoute = express.Router();

categoryRoute.post(
  "/api/v1/categories/create",
  isAuthenticated,
  Categories.create,
);
categoryRoute.get("/api/v1/categories/list", isAuthenticated, Categories.list);

module.exports = categoryRoute;
