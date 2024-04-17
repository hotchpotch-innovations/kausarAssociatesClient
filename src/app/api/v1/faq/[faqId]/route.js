import { connectionStr } from "@/lib/db";
import { FAQ } from "@/lib/model/faq";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const faqId = content.params?.faqId;
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await FAQ.findByIdAndUpdate(faqId, payload);
    return NextResponse.json({
      success: true,
      message: `FAQ Id: ${faqId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `FAQ Id: ${faqId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const faqId = content.params?.faqId;
  try {
    await mongoose.connect(connectionStr);
    const result = await FAQ.findByIdAndDelete(faqId);
    return NextResponse.json({
      success: true,
      message: `FAQ Id: ${faqId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `FAQ Id: ${faqId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const faqId = content.params?.faqId;
  const filter = { _id: faqId };
  try {
    await mongoose.connect(connectionStr);
    const result = await FAQ.findById(filter);
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
