import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Memory = new Schema({
  id: "",
  Name: String,
  Text: String,
  Time: ""
});

export default mongoose.model("memories", Memory);