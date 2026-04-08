import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

export async function POST(request) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();

    // Fix #1: Input validation - check empty fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required", success: false },
        { status: 400 }
      );
    }

    // Fix #2: Basic password strength check
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters", success: false },
        { status: 400 }
      );
    }

    // Fix #3: Normalize email to lowercase
    const normalizedEmail = email.toLowerCase().trim();

    // Check existing user
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists", success: false },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      username: username.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // Fix #4: If email fails, delete user (rollback)
    try {
      await sendEmail({
        email: normalizedEmail,
        emailtype: "VERIFY_EMAIL",
        userId: newUser._id,
      });
    } catch (emailError) {
      await User.findByIdAndDelete(newUser._id); // rollback user creation
      return NextResponse.json(
        { error: "Failed to send verification email. Please try again.", success: false },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User created successfully. Please verify your email.", success: true },
      { status: 201 }
    );

  } catch (error) {
    // Fix #5: Don't leak error details in production
    console.error("Signup error:", error.message);
    return NextResponse.json(
      {
        error: process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong. Please try again.",
        success: false,
      },
      { status: 500 }
    );
  }
}