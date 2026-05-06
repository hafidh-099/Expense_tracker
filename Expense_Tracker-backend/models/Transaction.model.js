const { DataTypes } = require("sequelize");
const db_connection = require("../utils/Database");

const transactionSchema = db_connection.define("Transaction", {
  user: {
    // reference to user - should be a foreign key
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // assuming you have a User model
      key: 'id'
    }
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {  // Fixed: use validate.isIn instead of enum
      isIn: [["income", "expense"]]
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "uncategorised",  // Fixed: defaultValue not default
  },
  amount: {
    type: DataTypes.INTEGER,  // Fixed: was "amount: DataTypes.INTEGER"
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,  // Fixed: defaultValue and use DataTypes.NOW
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = transactionSchema;
