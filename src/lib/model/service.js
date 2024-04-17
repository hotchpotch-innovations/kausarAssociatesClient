import mongoose from "mongoose";

const serviceModel = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  body: String,
  extraTitle1: String,
  extraDescription1: String,
  extraTitle2: String,
  extraDescription2: String,
  bannerImage: String,
  bodyImage: String,
});
export const Service =
  mongoose.models.Services || mongoose.model("Services", serviceModel);
