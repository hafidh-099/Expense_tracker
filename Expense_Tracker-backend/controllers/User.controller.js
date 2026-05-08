const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/User.model");
const { where } = require("sequelize");

const userController = {
  userRegistration: expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // valid
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("all field a required");
    }
    // exists
    const userExist =await UserSchema.findOne({ where: { email: email } });
    if (userExist) {
        res.status(400);
      throw new Error("user already exists");
    }
    // hash password
    const hashedPass = bcrypt.hashSync(password, 10);
    //create user
    const createUser = await UserSchema.create({
      username,
      password: hashedPass,
      email,
    });
    res.status(201).json({
      id: createUser.id,
      username: createUser.username,
      email: createUser.email,
    });
  }),
};

module.exports = userController;
