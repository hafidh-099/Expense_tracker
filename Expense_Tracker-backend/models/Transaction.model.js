const { DataTypes } = require("sequelize");
const db_connection = require("../utils/Database");


db_connection;
const transactionSchema = db_connection.define("Transaction", {
  user: {
    // reference to user
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    enum: ["income", "expense"],
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "uncategorised",
  },
  amount: {
    amount: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    default: Date.now,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = transactionSchema;
