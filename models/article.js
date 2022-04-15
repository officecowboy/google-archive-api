import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Article = new Schema({
  headlines: String,
  date: String
});

export default mongoose.model("articles", Article);