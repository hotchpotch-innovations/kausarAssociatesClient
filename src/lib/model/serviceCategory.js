import mongoose from "mongoose";

const ServiceCategoryModel = new mongoose.Schema({
  menu: String,
  link: String,
});
export const ServiceCategory =
  mongoose.models.ServiceCategory ||
  mongoose.model("ServiceCategory", ServiceCategoryModel);
