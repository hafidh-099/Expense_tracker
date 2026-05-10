const db_connection = require("../utils/Database");
const { DataTypes } = require("sequelize");


const categorySchema = db_connection.define("Category", {
  user: {
    // relationship - this should be defined as a foreign key
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // assuming you have a User model
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,  // Fixed: DataTypes (plural), STRING (not String)
    allowNull: false,
    defaultValue: "uncategorised"  // Fixed: defaultValue (not default)
  },
  type: {
    type: DataTypes.STRING,  // Fixed: DataTypes.STRING
    allowNull: false,
    validate: {  // Sequelize uses 'validate' not 'enum'
      isIn: [["income", "expense"]]
    }
  },
});

module.exports = categorySchema;
