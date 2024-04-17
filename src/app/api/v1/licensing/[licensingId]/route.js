import { connectionStr } from "@/lib/db";
import { Licensing } from "@/lib/model/licensing";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const licensingId = content.params?.licensingId;
    const payload = await request.json();
    const { bannerImage, bodyImage } = payload;
    const bannerImageUrl = await cloudinary.uploader?.upload(bannerImage, {
      folder: "kauser-associates",
    });
    const bodyImageUrl = await cloudinary.uploader?.upload(bodyImage, {
      folder: "kauser-associates",
    });
    payload.bannerImage = bannerImageUrl?.secure_url;
    payload.bodyImage = bodyImageUrl?.secure_url;
    await mongoose.connect(connectionStr);
    const result = await Licensing.findByIdAndUpdate(licensingId, payload);
    return NextResponse.json({
      success: true,
      message: `Licensing Id: ${licensingId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Licensing Id: ${licensingId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const licensingId = content.params?.licensingId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Licensing.findByIdAndDelete(licensingId);
    return NextResponse.json({
      success: true,
      message: `Licensing Id: ${licensingId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Licensing Id: ${licensingId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const licensingId = content.params?.licensingId;
  const filter = { _id: licensingId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Licensing.findById(filter);
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
