const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  country: String,
  name: String,
  location: [Number],
  exchange: [String],
  rating: { type: Number, default: 0 },
  voters: { type: Number, default: 0 }
});

// universitySchema.index({ location: "2dsphere" });

const universityModel = mongoose.model("University", universitySchema);
module.exports = universityModel;
