import { connectDB } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

//post request
export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    //validation
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 },
      );
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    //send email
    await sendEmail({ email, emailtype: "VERIFY_EMAIL", userId: newUser._id });
    return NextResponse.json(
      {
        message: "User created sucessfully",
        success: true,
        newUser,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
