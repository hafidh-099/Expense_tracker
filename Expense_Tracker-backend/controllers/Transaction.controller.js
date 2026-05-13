const expressAsyncHandler = require("express-async-handler");
const { where } = require("sequelize");
const transactionSchema = require("../models/Transaction.model");

const Transactions = {
  create: expressAsyncHandler(async (req, res) => {
    const { type, category, date, amount, descriptionk } = req.body;
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
    const { type, category } = req.query;
    let filter = { where: { user: req.user }, order: [["date", "DESC"]] };
    if (type) {
      filter.where.type = type;
    }
    if (category) {
      if (category == "All") {
        //No category filtered needed when filter all
      } else if (category === "uncategorised") {
        filter.where.category = category;
      } else {
        filter.where.category = category;
      }
    }
    const findByFilter = await transactionSchema.findAll(filter);
    res.json(findByFilter);
  }),
  //update profile
  delete: expressAsyncHandler(async (req, res) => {}),
};

module.exports = Transactions;
