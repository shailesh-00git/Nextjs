import { NextResponse } from "next/server";
import { users } from "../route"; // THIS IS CORRECT

export async function GET(request, { params }) {
  const res = await params;
  const id = res.id;

  const userId = parseInt(id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json(
      { success: false, error: "User not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}
