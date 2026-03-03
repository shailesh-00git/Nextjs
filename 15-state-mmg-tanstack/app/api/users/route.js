import { DANGEROUSLY_runPendingImmediatesAfterCurrentTask } from "next/dist/server/node-environment-extensions/fast-set-immediate.external";

let users = [
  { id: 100, name: "rajiv", email: "rajiv@gmail.com" },
  { id: 101, name: "hari", email: "hari@gmail.com" },
  { id: 102, name: "ram", email: "ram@gmail.com" },
  { id: 103, name: "sheela", email: "sheela@gmail.com" },
  { id: 104, name: "shital", email: "shital@gmail.com" },
  { id: 105, name: "athiti", email: "athiti@gmail.com" },
  { id: 106, name: "sarmila", email: "sarmila@gmail.com" },
];

// function to get users data
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json(users);
}

// function to create data for users
export async function POST(request) {
  const body = await request.json();
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  users.unshift(newUser);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json(newUser);
}

// delete user
export async function DELETE(request) {
  const body = await request.json();
  const userId = body.id;

  // remove the user from array
  users = users.filter((user) => user.id !== userId);

  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Response.json({ message: "User deleted successfully" });
}
