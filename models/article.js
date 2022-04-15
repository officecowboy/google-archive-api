import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Article = new Schema({
  abstract: String,
  web_url: String,
  lead_paragraph: String,
  headline: String,
  pub_date: Date,
  section_name: String,
  byline: String,
});

export default mongoose.model("articles", Article);
