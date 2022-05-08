// jshint esversion:6
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const pass = process.env.PASSWORD;
console.log(pass);
const mongoURI = `mongodb+srv://calculas:${pass}@cluster0.g81dz.mongodb.net/RecipeApp?retryWrites=true&w=majority`;

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Database connected!!!");
    });
  } catch (e) {
    console.log(e);
  }
};

connectToMongo();
