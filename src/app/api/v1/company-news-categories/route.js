import { connectionStr } from "@/lib/db";
import { CompanyNewsCategory } from "@/lib/model/companyNewsCategory";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await mongoose.connect(connectionStr);
    const data = await CompanyNewsCategory.find();
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let data = new CompanyNewsCategory(payload);
    const result = await data.save();
    return NextResponse.json({
      success: true,
      message: "Company news category data add to database successfully!",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
