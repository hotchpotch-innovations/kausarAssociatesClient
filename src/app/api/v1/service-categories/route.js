import { connectionStr } from "@/lib/db";
import { ServiceCategory } from "@/lib/model/serviceCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await ServiceCategory.find();
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let data = new ServiceCategory(payload);
    const result = await data.save();
    return NextResponse.json({
      success: true,
      message: "Service Category data add to database successfully!",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
