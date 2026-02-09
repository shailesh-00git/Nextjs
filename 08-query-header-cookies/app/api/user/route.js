import { NextResponse } from "next/server";

export const users = [
  { id: 1, name: "Harish", email: "Harish@example.com", age: 28 },
  { id: 2, name: "Jamuna", email: "SamJam@example.com", age: 32 },
  { id: 3, name: "Michael Brown", email: "michael@example.com", age: 24 },
  { id: 4, name: "Emily Davis", email: "emily@example.com", age: 29 },
  { id: 5, name: "David Putra", email: "DavPPP@example.com", age: 35 },
];

export async function GET(request) {
  try {
    //query parameters
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    const id = searchParams.get("id");

    //const to store the filterd user
    let filteredUsers = users;
    if (name) {
      filteredUsers = users.filter((u) =>
        u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );
    }
    if (age) {
      filteredUsers = users.filter((u) => u.age === Number(age));
    }
    if (id) {
      filteredUsers = users.filter((u) => u.id === Number(id));
    }

    return NextResponse.json(
      {
        success: true,
        data: filteredUsers,
        total: filteredUsers.length,
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
