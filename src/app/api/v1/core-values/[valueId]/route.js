import { connectionStr } from "@/lib/db";
import { Values } from "@/lib/model/values";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const valueId = content.params?.valueId;
    const payload = await request.json();
    const { img } = payload;
    const imageUrl = await cloudinary.uploader?.upload(img, {
      folder: "kauser-associates",
    });
    payload.img = imageUrl?.secure_url;
    await mongoose.connect(connectionStr);
    const result = await Values.findByIdAndUpdate(valueId, payload);
    return NextResponse.json({
      success: true,
      message: `Slide Id: ${valueId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Slide Id: ${valueId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const valueId = content.params?.valueId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Values.findByIdAndDelete(valueId);
    return NextResponse.json({
      success: true,
      message: `Slide Id: ${valueId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Slide Id: ${valueId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const valueId = content.params?.valueId;
  const filter = { _id: valueId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Values.findById(filter);
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
