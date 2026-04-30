import { connectDB } from "@/dbConnection/dbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDB();

  try {
    const { token } = await request.json();

    // vefify the token and check time
    const user = await User.findone({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    //check user
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();
    return NextResponse.json(
      { message: "Email verified sucessfully", success: true },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
