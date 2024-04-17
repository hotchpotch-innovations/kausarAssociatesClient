import mongoose from "mongoose";

const LicensingCategoryModel = new mongoose.Schema({
  menu: String,
  link: String,
});
export const LicensingCategory =
  mongoose.models.LicensingCategory ||
  mongoose.model("LicensingCategory", LicensingCategoryModel);
