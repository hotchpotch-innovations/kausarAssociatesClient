import mongoose from "mongoose";

const teamSlideModel = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  webMail: String,
  cellPhone: String,
  dealCase: Number,
  img: String,
});
export const TeamSlide =
  mongoose.models.TeamSlides || mongoose.model("TeamSlides", teamSlideModel);
