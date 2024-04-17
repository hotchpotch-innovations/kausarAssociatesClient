import { apiKey, apiKeySecret, cloudName } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiKeySecret,
});

export default cloudinary;
