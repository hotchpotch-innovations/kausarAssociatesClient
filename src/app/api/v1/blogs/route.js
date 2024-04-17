import { connectionStr } from "@/lib/db";
import { Blog } from "@/lib/model/blogs";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await Blog.find();
    // console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  let mainImageUrl;
  let bodyImageUrl1;
  let bodyImageUrl2;
  let bodyImageUrl3;
  try {
    const payload = await request.json();
    const { mainImage, bodyImages } = payload;
    const bodyImage1 = bodyImages[0];
    const bodyImage2 = bodyImages[1];
    const bodyImage3 = bodyImages[2];

    if (mainImage) {
      mainImageUrl = await cloudinary.uploader.upload(mainImage, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    if (bodyImage1) {
      bodyImageUrl1 = await cloudinary.uploader.upload(bodyImage1, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    if (bodyImage2) {
      bodyImageUrl2 = await cloudinary.uploader.upload(bodyImage2, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    if (bodyImage3) {
      bodyImageUrl3 = await cloudinary.uploader.upload(bodyImage3, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    payload.mainImage = mainImageUrl?.secure_url;
    payload.bodyImages[0] = bodyImageUrl1?.secure_url;
    payload.bodyImages[1] = bodyImageUrl2?.secure_url;
    payload.bodyImages[2] = bodyImageUrl3?.secure_url;

    // console.log(payload);
    await mongoose.connect(connectionStr);
    let blog = new Blog(payload);
    const result = await blog.save();
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
