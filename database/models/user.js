const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },

  password: {
    type: String,
  },
  CIN: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
