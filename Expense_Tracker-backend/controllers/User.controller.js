const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/User.model");
const { where } = require("sequelize");

const userController = {
  register: expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // valid
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("all field a required");
    }
    // exists
    const userExist = await UserSchema.findOne({ where: { email: email } });
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
  //login
  login: expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existUser = await UserSchema.findOne({ where: { email: email } });
    if (!existUser) {
      res.status(400);
      throw new Error("invalid cridential");
    }
    const validPassword = bcrypt.compareSync(password, existUser.password);
    if (!validPassword) {
      res.status(400);
      throw new Error("invalid cridential");
    }
    //generate token
    const token = jwt.sign(
      { id: existUser.id, email: existUser.email },
      "it is secret",
      { expiresIn: "1d" },
    );
    res.status(200).json({
      message: "login success",
      id: existUser.id,
      username: existUser.username,
      email: existUser.email,
      token,
    });
  }),
  //update profile
  profile: expressAsyncHandler(async (req, res) => {
    const user = await UserSchema.findByPk(req.user);
    if (!user) {
      res.status(404);
      throw new Error("user not found");
    }
    res.status(200).json({
      username: user.username,
      email: user.email,
    });
  }),
  //update password
  updatePassword: expressAsyncHandler(async (req, res) => {
    const { password } = req.body;
    if (!password) {
    res.status(400);
    throw new Error("Password is required");
  }
    const user = await UserSchema.findByPk(req.user);
    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }
    const newPassword = bcrypt.hashSync(password,10);
    user.password = newPassword;
    await user.save();
    res.status(200).json({
      message: "Password is success updated",
    });
  }),

  updateProfile: expressAsyncHandler(async (req, res) => {
    const { password } = req.body;
    const user = await UserSchema.findByPk(req.user);
    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }
    const newPassword = bcrypt.hashSync(password);
    user.password = newPassword;
    await user.save();
    res.status(200).json({
      message: "Password is success updated",
    });
  }),
};

module.exports = userController;
