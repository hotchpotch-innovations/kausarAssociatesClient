import { connectionStr } from "@/lib/db";
import { Blog } from "@/lib/model/blogs";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  let mainImageUrl;
  let bodyImageUrl1;
  let bodyImageUrl2;
  let bodyImageUrl3;
  const blogId = content.params?.blogId;
  const payload = await request.json();
  const { mainImage, bodyImages } = payload;
  const bodyImage1 = bodyImages[0];
  const bodyImage2 = bodyImages[1];
  const bodyImage3 = bodyImages[2];
  try {
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

    await mongoose.connect(connectionStr);
    const result = await Blog.findByIdAndUpdate(blogId, payload);
    return NextResponse.json({
      success: true,
      message: `Blog Id: ${blogId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Blog Id: ${blogId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const blogId = content.params?.blogId;
  try {
    await mongoose.connect(connectionStr);
    const result = await Blog.findByIdAndDelete(blogId);
    return NextResponse.json({
      success: true,
      message: `Blog Id: ${blogId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Blog Id: ${blogId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const blogId = content.params?.blogId;
  const filter = { _id: blogId };
  try {
    await mongoose.connect(connectionStr);
    const result = await Blog.findById(filter);
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error?.message,
    });
  }
}
