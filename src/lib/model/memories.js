import mongoose from "mongoose";

const memoriesModel = new mongoose.Schema({
  img: String,
});
export const MemoryGallery =
  mongoose.models.MemoryGallery ||
  mongoose.model("MemoryGallery", memoriesModel);
