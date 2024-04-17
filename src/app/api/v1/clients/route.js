import { connectionStr } from "@/lib/db";
import { Client } from "@/lib/model/clients";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await Client.find();
    // console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { img } = payload;
    const imageUrl = await cloudinary.uploader.upload(img, {
      folder: "kauser-associates",
      // width: 300,
      // crop: "scale"
    });
    payload.img = imageUrl.secure_url;
    // console.log(imageUrl);
    await mongoose.connect(connectionStr);
    let slide = new Client(payload);
    const result = await slide.save();
    return NextResponse.json({
      success: true,
      message: "Client add to database successfully!",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
