import mongoose from "mongoose";

const FAQModel = new mongoose.Schema({
  question: String,
  answer: String,
});
export const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", FAQModel);
