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

categoryRoute.put(
  "/api/v1/categories/update/:id",
  isAuthenticated,
  Categories.update,
);

categoryRoute.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  Categories.delete,
);
module.exports = categoryRoute;
