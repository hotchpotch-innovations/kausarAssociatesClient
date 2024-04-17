import { connectionStr } from "@/lib/db";
import { Service } from "@/lib/model/service";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const serviceId = content.params?.serviceId;
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
    const result = await Service.findByIdAndUpdate(serviceId, payload);
    return NextResponse.json({
      success: true,
      message: `Service Id: ${serviceId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Service Id: ${serviceId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const serviceId = content.params?.serviceId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Service.findByIdAndDelete(serviceId);
    return NextResponse.json({
      success: true,
      message: `Service Id: ${serviceId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Service Id: ${serviceId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const serviceId = content.params?.serviceId;
  const filter = { _id: serviceId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Service.findById(filter);
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
