const express = require("express");
const db_connection = require("./utils/Database");
const userRoute = require("./routes/User.route");
const errorHandle = require("./middleware/ErrorHandling");

const app = express();
//db handler
async function db() {
  await db_connection.authenticate();
  await db_connection.sync();
  console.log("connection success");
}
db();

app.use(express.json());

//route
app.use("/", userRoute);
//errorHandling
app.use(errorHandle);

app.listen(3000, () => {
  console.log("server running on ports http://localhost:3000");
});
