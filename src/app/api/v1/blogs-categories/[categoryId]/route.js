import { connectionStr } from "@/lib/db";
import { BlogCategory } from "@/lib/model/blogsCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(request, content) {
  try {
    const categoryId = content.params?.categoryId;
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await BlogCategory.findByIdAndUpdate(categoryId, payload);
    return NextResponse.json({
      success: true,
      message: `Blog Category Id: ${categoryId} is update successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Blogs Category Id: ${categoryId} is update failed`,
    });
  }
}

export async function DELETE(request, content) {
  const categoryId = content.params?.categoryId;
  try {
    await mongoose.connect(connectionStr);
    const result = await BlogCategory.findByIdAndDelete(categoryId);
    return NextResponse.json({
      success: true,
      message: `Blog Category Id: ${categoryId} is delete successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Blog Category Id: ${categoryId} is delete failed`,
    });
  }
}

export async function GET(request, content) {
  const categoryId = content.params?.categoryId;
  const filter = { _id: categoryId };
  try {
    await mongoose.connect(connectionStr);
    const result = await BlogCategory.findById(filter);
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
