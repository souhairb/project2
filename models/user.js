const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  university: String,
  password: String
  // universityRanking: Number
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
