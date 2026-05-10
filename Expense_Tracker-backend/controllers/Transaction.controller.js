const expressAsyncHandler = require("express-async-handler");
const { where } = require("sequelize");
const categorySchema = require("../models/Categories.model");

const Categories = {
  create: expressAsyncHandler(async (req, res) => {
    const { name, type } = req.body;
    if (!name || !type) {
      throw new Error("name and type are required to create category");
    }
    const normalizeName = name.toLowerCase();
    const validType = ["income", "expense"];
    if (!validType.includes(type.toLowerCase())) {
      throw new Error("invalid category type ", type);
    }
    //check if category exists
    const categoriExists = await categorySchema.findOne({
      where: { name: name, user: req.user },
    });
    if (categoriExists) {
      throw new Error(`category ${categoriExists.name} already exists`);
    }
    const category = await categorySchema.create({
      name: normalizeName,
      user: req.user,
      type,
    });
    res.status(201).json(category);
  }),
  //list
  list: expressAsyncHandler(async (req, res) => {
    const category = await categorySchema.findAll({
      where: { user: req.user },
    });
    res.status(200).json(category);
  }),
  //update profile
  delete: expressAsyncHandler(async (req, res) => {}),
};

module.exports = Categories;
