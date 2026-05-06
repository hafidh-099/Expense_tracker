const { Sequelize } = require("sequelize");  
require("dotenv").config();

const db_connection = new Sequelize(  
  process.env.DB_NAME,      
  process.env.DB_USERNAME,  
  process.env.DB_PASSWD, 
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

module.exports = db_connection;