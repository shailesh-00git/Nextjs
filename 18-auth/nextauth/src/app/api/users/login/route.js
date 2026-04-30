import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";

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

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User doesnot exist", success: false },
        { status: 400 },
      );
    }

    // // Check if email is verified
    // if (!user.isVerified) {
    //   return NextResponse.json(
    //     { error: "Please verify your email first", success: false },
    //     { status: 403 },
    //   );
    // }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password", success: false },
        { status: 400 },
      );
    }

    // token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = JWT.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "Login successful", success: true },
      { status: 200 },
    );

    response.cookies.set("token", token, { httpOnly: true });

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
