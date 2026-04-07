import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

export async function POST(request) {
  try {
    await connectDB();

    const { username, email, password } = await request.json();

    // Validation
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with hashed password
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Send email
    await sendEmail({ email, emailtype: "VERIFY_EMAIL", userId: newUser._id });

    return NextResponse.json(
      { message: "User created successfully", success: true },
      { status: 201 }, // 201 is more appropriate for resource creation
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
