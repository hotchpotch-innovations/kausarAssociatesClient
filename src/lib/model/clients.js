import mongoose from "mongoose";

const clientsModel = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  dealCase: Number,
  img: String,
});
export const Client =
  mongoose.models.Client || mongoose.model("Client", clientsModel);
