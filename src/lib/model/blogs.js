import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  language: String,
  categoryId: String,
  title: String,
  description: String,
  paragraph1: String,
  paragraph2: String,
  mainImage: String,
  bodyImages: Array,
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
