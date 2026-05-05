const sequalize = require("sequelize");
require("dotenv").config();

const db_connection = new sequalize(
  process.env.DB_USER,
  process.env.DB_PASSWD,
  process.env.DB_USERNAME,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  },
);

module.exports = db_connection;
