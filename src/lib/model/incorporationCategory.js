import mongoose from "mongoose";

const IncorporationCategoryModel = new mongoose.Schema({
  menu: String,
  link: String,
});
export const IncorporationCategory =
  mongoose.models.IncorporationCategory ||
  mongoose.model("IncorporationCategory", IncorporationCategoryModel);
