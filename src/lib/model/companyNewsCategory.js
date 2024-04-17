import mongoose from "mongoose";

const CompanyNewsCategoryModel = new mongoose.Schema({
  menu: String,
  link: String,
});
export const CompanyNewsCategory =
  mongoose.models.CompanyNewsCategory ||
  mongoose.model("CompanyNewsCategory", CompanyNewsCategoryModel);
