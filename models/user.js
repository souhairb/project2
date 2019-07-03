const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  university: {
    type: Schema.Types.ObjectId,
    ref: "University"
  },
  password: String,
  ranking: Number
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
