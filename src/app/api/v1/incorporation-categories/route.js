import { connectionStr } from "@/lib/db";
import { IncorporationCategory } from "@/lib/model/incorporationCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await IncorporationCategory.find();
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let data = new IncorporationCategory(payload);
    const result = await data.save();
    return NextResponse.json({
      success: true,
      message: "Incorporation category data add to database successfully!",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
