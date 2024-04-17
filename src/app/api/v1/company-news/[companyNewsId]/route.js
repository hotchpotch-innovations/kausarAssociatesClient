import { connectionStr } from "@/lib/db";
import { CompanyNews } from "@/lib/model/companyNews";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  let mainImageUrl;
  let bodyImageUrl1;
  let bodyImageUrl2;
  let bodyImageUrl3;
  const companyNewsId = content.params?.companyNewsId;
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
    const result = await CompanyNews.findByIdAndUpdate(companyNewsId, payload);
    return NextResponse.json({
      success: true,
      message: `Company News Id: ${companyNewsId} is update successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company News Id: ${companyNewsId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const companyNewsId = content.params?.companyNewsId;
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyNews.findByIdAndDelete(companyNewsId);
    return NextResponse.json({
      success: true,
      message: `Company News Id: ${companyNewsId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company News Id: ${companyNewsId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const companyNewsId = content.params?.companyNewsId;
  const filter = { _id: companyNewsId };
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyNews.findById(filter);
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
