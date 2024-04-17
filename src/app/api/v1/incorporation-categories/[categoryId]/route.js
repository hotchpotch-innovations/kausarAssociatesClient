import { connectionStr } from "@/lib/db";
import { IncorporationCategory } from "@/lib/model/incorporationCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const categoryId = content.params?.categoryId;
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await IncorporationCategory.findByIdAndUpdate(
      categoryId,
      payload
    );
    return NextResponse.json({
      success: true,
      message: `Incorporation Category Id: ${categoryId} is update successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Incorporation category Id: ${categoryId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const categoryId = content.params?.categoryId;
  try {
    await mongoose.connect(connectionStr);
    const result = await IncorporationCategory.findByIdAndDelete(categoryId);
    return NextResponse.json({
      success: true,
      message: `Incorporation category Id: ${categoryId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Incorporation category Id: ${categoryId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const categoryId = content.params?.categoryId;
  const filter = { _id: categoryId };
  try {
    await mongoose.connect(connectionStr);
    const result = await IncorporationCategory.findById(filter);
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
