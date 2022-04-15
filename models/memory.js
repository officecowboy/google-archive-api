import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Memory = new Schema({
  name: String,
  text: String,
},
  { timestamps: true }
);

export default mongoose.model("memories", Memory);