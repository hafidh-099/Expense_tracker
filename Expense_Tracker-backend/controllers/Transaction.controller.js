const expressAsyncHandler = require("express-async-handler");
const { where } = require("sequelize");
const transactionSchema = require("../models/Transaction.model");

const Transactions = {
  create: expressAsyncHandler(async (req, res) => {
    const { type, category, date, amount, description } = req.body;
    if (!type || !amount) {
      throw new Error(
        "Anount,date and type are required to create transactins",
      );
    }
    const transaction = await transactionSchema.create({
      user: req.user,
      type,
      category,
      amount,
      date,
      description,
    });
    res.status(201).json(transaction);
  }),
  //list
  list: expressAsyncHandler(async (req, res) => {
    const transaction = await transactionSchema.findAll({
      where: { user: req.user },
    });
    res.status(200).json(transaction);
  }),
  //update profile
  delete: expressAsyncHandler(async (req, res) => {}),
};

module.exports = Transactions;
