import { NextRequest, NextResponse } from "next/server";
import { users } from "../../user/route";

export async function DELETE(request, { params }) {
  const res = await params;
  const id = res.id;
  const UserId = parseInt(id);
  try {
    const userIndex = users.findIndex((u) => u.id === UserId);
    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          meassge: " user not found",
        },
        { status: 404 },
      );
    }
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return NextResponse.json(
      {
        success: true,
        data: deletedUser,
        message: "User deleted",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete" },
      { status: 500 },
    );
  }
}
