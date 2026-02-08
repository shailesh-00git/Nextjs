import { NextResponse } from "next/server";
import { users } from "../../user/route";
export async function PUT(request, { params }) {
  const res = await params;
  const id = res.id;
  const userId = parseInt(id);
  try {
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextRequest(
        {
          success: false,
          error: " User not found",
        },
        { status: 404 },
      );
    }
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          success: false,
          error: "name, email, and age must be entered",
        },
        { status: 400 },
      );
    }

    users[userIndex] = {
      id: userId,
      name: name,
      email: email,
      agr: age,
    };
    return NextResponse.json(
      {
        success: true,
        data: users[userIndex],
        message: "user updated",
      },
      { ststus: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "failed to update" },
      { status: 404 },
    );
  }
}
