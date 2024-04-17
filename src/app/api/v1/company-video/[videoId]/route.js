import { connectionStr } from "@/lib/db";
import { CompanyVideo } from "@/lib/model/companyVideo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const videoId = content.params?.videoId;
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await CompanyVideo.findByIdAndUpdate(videoId, payload);
    return NextResponse.json({
      success: true,
      message: `Company Video Id: ${videoId} is update successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company Video Id: ${videoId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const videoId = content.params?.videoId;
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyVideo.findByIdAndDelete(videoId);
    return NextResponse.json({
      success: true,
      message: `Company Video Id: ${videoId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company Video Id: ${videoId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const videoId = content.params?.videoId;
  const filter = { _id: videoId };
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyVideo.findById(filter);
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
