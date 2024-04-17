import { connectionStr } from "@/lib/db";
import { Incorporation } from "@/lib/model/incorporation";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const incorporationId = content.params?.incorporationId;
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
    const result = await Incorporation.findByIdAndUpdate(
      incorporationId,
      payload
    );
    return NextResponse.json({
      success: true,
      message: `Incorporation Id: ${incorporationId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Incorporation Id: ${incorporationId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const incorporationId = content.params?.incorporationId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Incorporation.findByIdAndDelete(incorporationId);
    return NextResponse.json({
      success: true,
      message: `Incorporation Id: ${incorporationId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Incorporation Id: ${incorporationId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const incorporationId = content.params?.incorporationId;
  const filter = { _id: incorporationId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Incorporation.findById(filter);
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
