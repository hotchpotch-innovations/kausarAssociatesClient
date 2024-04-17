import { connectionStr } from "@/lib/db";
import { MemoryGallery } from "@/lib/model/memories";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request, content) {
  const photoId = content.params?.photoId;
  try {
    await mongoose.connect(connectionStr);
    const result = await MemoryGallery.findByIdAndDelete(photoId);
    return NextResponse.json({
      success: true,
      message: `Slide Id: ${photoId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Slide Id: ${photoId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const photoId = content.params?.photoId;
  const filter = { _id: photoId };
  try {
    await mongoose.connect(connectionStr);
    const result = await MemoryGallery.findById(filter);
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
