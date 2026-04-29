import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

export async function POST(request) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();

    // verification
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required", success: false },
        { status: 400 },
      );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists", success: false },
        { status: 400 },
      );
    }

    // Hash password and salting
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //save user
    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    
    return NextResponse.json(
      {
        message: "User created successfully. Please verify your email.",
        success: true,
        savedUser,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error.message);
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
