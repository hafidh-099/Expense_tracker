const express = require("express");
const cors = require("cors");
const db_connection = require("./utils/Database");
const userRoute = require("./routes/User.route");
const errorHandle = require("./middleware/ErrorHandling");
const categoryRoute = require("./routes/Category.route");
const transactionRoute = require("./routes/transaction.route");

const app = express();
//db handler
async function db() {
  await db_connection.authenticate();
  await db_connection.sync();
  console.log("connection success");
}
db();
const corsOpt={
origin:["http://localhost:5173"]
}
app.use(cors(corsOpt));
app.use(express.json());

//route
app.use("/", userRoute);
app.use("/", categoryRoute);
app.use("/", transactionRoute);
//errorHandling
app.use(errorHandle);

app.listen(3000, () => {
  console.log("server running on ports http://localhost:3000");
});
