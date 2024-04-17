import mongoose from "mongoose";

const BlogCategoryModel = new mongoose.Schema({
  menu: String,
  link: String,
});
export const BlogCategory =
  mongoose.models.BlogCategory ||
  mongoose.model("BlogCategory", BlogCategoryModel);
