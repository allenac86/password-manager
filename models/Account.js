const mongoose = require("mongoose");
const getDateNow = require("../date");

const AccountSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "must provide URL"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "must provide username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "must provide password"],
    trim: true,
    minlength: [15, "password must be at least 15 characters"],
    maxlength: [20, "password must not exceed 20 characters"],
  },
  createdOn: {
    type: String,
    required: [true, "must have created on date"],
    default: getDateNow(),
  },
});

module.exports = mongoose.model("Account", AccountSchema);
