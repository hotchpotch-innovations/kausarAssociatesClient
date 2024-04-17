import mongoose from "mongoose";

const valuesModel = new mongoose.Schema({
  title: String,
  content: String,
  img: String,
});
export const Values =
  mongoose.models.Values || mongoose.model("Values", valuesModel);
