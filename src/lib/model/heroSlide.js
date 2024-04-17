import mongoose from "mongoose";

const heroSlideModel = new mongoose.Schema({
  title1: String,
  title2: String,
  subtitle: String,
  img: String,
});
export const HeroSlide =
  mongoose.models.HeroSlides || mongoose.model("HeroSlides", heroSlideModel);
