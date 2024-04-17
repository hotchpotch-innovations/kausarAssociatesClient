import { connectionStr } from "@/lib/db";
import { Client } from "@/lib/model/clients";
import { HeroSlide } from "@/lib/model/heroSlide";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const clientId = content.params?.clientId;
    const payload = await request.json();
    const { img } = payload;
    const imageUrl = await cloudinary.uploader?.upload(img, {
      folder: "kauser-associates",
    });
    payload.img = imageUrl?.secure_url;
    await mongoose.connect(connectionStr);
    const result = await Client.findByIdAndUpdate(clientId, payload);
    return NextResponse.json({
      success: true,
      message: `Client Id: ${clientId} is update successfully!`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Client Id: ${clientId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const clientId = content.params?.clientId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Client.findByIdAndDelete(clientId);
    return NextResponse.json({
      success: true,
      message: `Client Id: ${clientId} is delete successfully!`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Client Id: ${clientId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const clientId = content.params?.clientId;
  const filter = { _id: clientId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Client.findById(filter);
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
