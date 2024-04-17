import { connectionStr } from "@/lib/db";
import { HeroSlide } from "@/lib/model/heroSlide";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const slideId = content.params?.slideId;
    const payload = await request.json();
    const { img } = payload;
    const imageUrl = await cloudinary.uploader?.upload(img, {
      folder: "kauser-associates",
    });
    payload.img = imageUrl?.secure_url;
    await mongoose.connect(connectionStr);
    const result = await HeroSlide.findByIdAndUpdate(slideId, payload);
    return NextResponse.json({
      success: true,
      message: `Slide Id: ${slideId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Slide Id: ${slideId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const slideId = content.params?.slideId;
  try {
    await mongoose.connect(connectionStr);
    const result = await HeroSlide.findByIdAndDelete(slideId);
    return NextResponse.json({
      success: true,
      message: `Slide Id: ${slideId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Slide Id: ${slideId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const slideId = content.params?.slideId;
  const filter = { _id: slideId };
  try {
    await mongoose.connect(connectionStr);
    const result = await HeroSlide.findById(filter);
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
