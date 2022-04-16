import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Weather = new Schema({
  DATE: String,
  PRCP: String,
  SNOW: String,
  TMAX: String,
  TMIN: String,
});

export default mongoose.model("weather", Weather);
