const db_connection = require("sequelize");
const { Datatypes } = require("sequelize");

const categorySchema = db_connection.define("Category", {
  user: {
    // relationship
  },
  name: {
    type: Datatype.String,
    allowNull: false,
    default: "uncategorised",
  },
  type: {
    type: Datatype.String,
    allowNull: false,
    enum: ["income", "expense"],
  },
});

module.exports = categorySchema;
