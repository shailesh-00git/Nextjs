import { connectDB } from "@/dbConnection/dbConnection";
import { getDatafromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  connectDB();
  try {
    const UserId = await getDatafromToken(request);
    const user = await User.findOne({ _id: UserId }).select("-password");

    // check for user
    if (!user) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 500 },
      );
    }
    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    );
  }
}
