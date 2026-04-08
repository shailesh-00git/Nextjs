import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    // Validation - check empty fields
    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required", success: false },
        { status: 400 },
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user exists
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password", success: false },
        { status: 400 },
      );
    }

    // Check if email is verified
    if (!user.isVerified) {
      return NextResponse.json(
        { error: "Please verify your email first", success: false },
        { status: 403 },
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password", success: false },
        { status: 400 },
      );
    }

    // Set token in cookie
    const response = NextResponse.json(
      { message: "Login successful", success: true },
      { status: 200 },
    );

    return response;
  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong. Please try again.",
        success: false,
      },
      { status: 500 },
    );
  }
}
