import { connectionStr } from "@/lib/db";
import { ServiceCategory } from "@/lib/model/serviceCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const categoryId = content.params?.categoryId;
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await ServiceCategory.findByIdAndUpdate(categoryId, payload);
    return NextResponse.json({
      success: true,
      message: `Service Category Id: ${categoryId} is update successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Service category Id: ${categoryId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const categoryId = content.params?.categoryId;
  try {
    await mongoose.connect(connectionStr);
    const result = await ServiceCategory.findByIdAndDelete(categoryId);
    return NextResponse.json({
      success: true,
      message: `Service category Id: ${categoryId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Service category Id: ${categoryId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const categoryId = content.params?.categoryId;
  const filter = { _id: categoryId };
  try {
    await mongoose.connect(connectionStr);
    const result = await ServiceCategory.findById(filter);
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
