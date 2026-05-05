const { required, allow } = require("joi");
const db_connection = require("../utils/Database");
const { DataTypes } = require("sequelize");

const UserSchema = db_connection.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    // validate intered to the db
    validation: {
      min: 1,
      max: 1000,
      notEmpty: true,
    },
    // validate intered by user
    len: {
      args: [2, 20],
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    required: true,
    allowNull: false,
  },
});

module.exports = UserSchema;
