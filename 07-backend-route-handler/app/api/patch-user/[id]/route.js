import { NextResponse } from "next/server";
import { users } from "../../user/route";
export async function PATCH(request, { params }) {
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
    const body = await request.json();

    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: userId,
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
