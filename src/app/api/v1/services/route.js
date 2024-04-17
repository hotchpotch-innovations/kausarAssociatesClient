import { connectionStr } from "@/lib/db";
import { Service } from "@/lib/model/service";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await Service.find();
    // console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { bannerImage, bodyImage } = payload;
    const bannerImageUrl = await cloudinary.uploader.upload(bannerImage, {
      folder: "kauser-associates",
      // width: 300,
      // crop: "scale"
    });
    const bodyImageUrl = await cloudinary.uploader.upload(bodyImage, {
      folder: "kauser-associates",
      // width: 300,
      // crop: "scale"
    });
    payload.bannerImage = bannerImageUrl.secure_url;
    payload.bodyImage = bodyImageUrl.secure_url;
    // console.log(imageUrl);
    await mongoose.connect(connectionStr);
    let service = new Service(payload);
    const result = await service.save();
    return NextResponse.json({
      success: true,
      message: "Data add to database successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
