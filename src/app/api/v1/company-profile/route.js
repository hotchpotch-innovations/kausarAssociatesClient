import { connectionStr } from "@/lib/db";
import { CompanyProfile } from "@/lib/model/companyProfile";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await CompanyProfile.find();
    // console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  let profileImageFile;
  let profilePDF;
  try {
    const payload = await request.json();
    const { profileImage, profile } = payload;

    if (profileImage) {
      profileImageFile = await cloudinary.uploader.upload(profileImage, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    if (profile) {
      profilePDF = await cloudinary.uploader.upload(profile, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    payload.profileImage = profileImageFile?.secure_url;
    payload.profile = profilePDF?.secure_url;

    // console.log(payload);
    await mongoose.connect(connectionStr);
    let companyProfile = new CompanyProfile(payload);
    const result = await companyProfile.save();
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
