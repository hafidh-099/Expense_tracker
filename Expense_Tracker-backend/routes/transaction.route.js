const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const Transactions = require("../controllers/Transaction.controller");

const transactionRoute = express.Router();

transactionRoute.post(
  "/api/v1/transaction/create",
  isAuthenticated,
  Transactions.create,
);
transactionRoute.get(
  "/api/v1/transaction/list",
  isAuthenticated,
  Transactions.list,
);

module.exports = transactionRoute;
