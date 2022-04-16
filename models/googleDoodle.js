import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Doodles = new Schema({
  year: String,
  month: String,
  day: String,
  name: String,
  url: String,
  high_res_url: String,
  high_res_width: String,
  high_res_height: String,
});

export default mongoose.model("googleDoodles", Doodles);
