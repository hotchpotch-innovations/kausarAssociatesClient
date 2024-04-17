import { connectionStr } from "@/lib/db";
import { CompanyProfile } from "@/lib/model/companyProfile";
import cloudinary from "@/utlts/cloudinary";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  let profileImageFile;
  let profilePDF;
  const companyProfileId = content.params?.profileId;
  const payload = await request.json();
  const { profileImage, profile } = payload;

  try {
    if (profileImage) {
      profileImageFile = await cloudinary.uploader.upload(profileImage, {
        folder: "kauser-associates",
        // width: 300,
        // crop: "scale"
      });
    }

    if (profile) {
      profilePDF = await cloudinary.uploader.upload(profile, {
        folder: "kauser-associates-pdf",
      });
    }

    payload.profileImage = profileImageFile?.secure_url;
    payload.profile = profilePDF?.secure_url;

    await mongoose.connect(connectionStr);
    const result = await CompanyProfile.findByIdAndUpdate(
      companyProfileId,
      payload
    );
    return NextResponse.json({
      success: true,
      message: `Company Profile Id: ${companyProfileId} is update successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company Profile Id: ${companyProfileId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const companyProfileId = content.params?.companyProfileId;
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyProfile.findByIdAndDelete(companyProfileId);
    return NextResponse.json({
      success: true,
      message: `Company Profile Id: ${companyProfileId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Company Profile Id: ${companyProfileId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const companyProfileId = content.params?.companyProfileId;
  const filter = { _id: companyProfileId };
  try {
    await mongoose.connect(connectionStr);
    const result = await CompanyProfile.findById(filter);
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
