import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 32,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    age: 24,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    age: 29,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    age: 35,
  },
];

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: users,
        total: users.length,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "failed to get users" },
      { status: 500 },
    );
  }
}
