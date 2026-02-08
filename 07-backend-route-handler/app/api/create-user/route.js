import { NextResponse } from "next/server";
import { users } from "../route"; // adjust path if needed

export async function POST(request) {
  try {
    const { name, email, age } = await request.json();

    // validation
    if (!name || !email || !age) {
      return NextResponse.json(
        {
          success: false,
          error: "name, email, and age must be entered",
        },
        { status: 400 },
      );
    }

    // check if email already exists
    const existEmail = users.find((user) => user.email === email);

    if (existEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "User already exists",
        },
        { status: 400 },
      );
    }

    // create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      age,
    };

    users.push(newUser);

    return NextResponse.json(
      {
        success: true,
        data: newUser,
        message: "New user created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create user",
      },
      { status: 500 },
    );
  }
}
