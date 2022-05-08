let mongoose = require("mongoose");
// let validator = require("validator");

let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // validate: (value) => {
    //   return validator.isEmail(value);
    // },
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", emailSchema);
