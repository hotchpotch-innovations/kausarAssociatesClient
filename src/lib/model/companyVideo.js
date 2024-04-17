import mongoose from "mongoose";

const companyVideoSchema = new mongoose.Schema({
  title: String,
  url: String,
});

export const CompanyVideo =
  mongoose.models.CompanyVideo ||
  mongoose.model("CompanyVideo", companyVideoSchema);
