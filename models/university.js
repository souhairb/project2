const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: String,
  description: String,
  location: [Number]
});

// universitySchema.index({ location: "2dsphere" });

const universityModel = mongoose.model("University", universitySchema);
module.exports = universityModel;
