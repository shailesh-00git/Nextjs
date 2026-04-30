import { connectDB } from "@/dbConnection/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
  connectDB();
  try {
    const response = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });

    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error) {
    console.error("Signup error:", error.message);
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 },
    );
  }
}
