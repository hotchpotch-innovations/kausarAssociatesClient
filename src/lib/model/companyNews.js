import mongoose from "mongoose";

const companyNewsSchema = new mongoose.Schema({
  language: String,
  categoryId: String,
  title: String,
  description: String,
  paragraph1: String,
  paragraph2: String,
  mainImage: String,
  bodyImages: Array,
});

export const CompanyNews =
  mongoose.models.CompanyNews ||
  mongoose.model("CompanyNews", companyNewsSchema);
