import mongoose from "mongoose";

const companyProfileSchema = new mongoose.Schema({
  title: String,
  profileImage: String,
  profile: String,
});

export const CompanyProfile =
  mongoose.models.CompanyProfile ||
  mongoose.model("CompanyProfile", companyProfileSchema);
