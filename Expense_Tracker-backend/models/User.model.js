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
    validate: {  // Fixed: 'validate' not 'validation'
      len: {
        args: [2, 20],  // min: 2, max: 20 characters
        msg: "Username must be between 2 and 20 characters"
      },
      isAlphanumeric: {
        msg: "Username can only contain letters and numbers"
      },
      notEmpty: {
        msg: "Username cannot be empty"
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 100],  // Min 6 characters for security
        msg: "Password must be at least 6 characters"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,  // 'required' is not a Sequelize attribute, use 'allowNull'
    validate: {
      isEmail: {
        msg: "Must be a valid email address"
      },
      notEmpty: {
        msg: "Email cannot be empty"
      }
    }
  }
});

module.exports = UserSchema;
