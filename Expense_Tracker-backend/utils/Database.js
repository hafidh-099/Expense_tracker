const { Sequelize } = require("sequelize");  
require("dotenv").config();

const db_connection = new Sequelize(  
  process.env.HOST_DB, 
  process.env.HOST_USER,      
  process.env.HOST_PASS,  
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
  
);

module.exports = db_connection;