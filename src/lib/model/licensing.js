import mongoose from "mongoose";

const licensing = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  extraTitle1: String,
  extraDescription1: String,
  extraTitle2: String,
  extraDescription2: String,
  bannerImage: String,
  bodyImage: String,
});

export const Licensing =
  mongoose.models.Licensing || mongoose.model("Licensing", licensing);
