let users = [
  { id: 100, name: "rajiv", email: "rajiv@gmail.com" },
  { id: 101, name: "hari", email: "hari@gmail.com" },
  { id: 102, name: "ram", email: "ram@gmail.com" },
  { id: 103, name: "sheela", email: "sheela@gmail.com" },
  { id: 104, name: "shital", email: "shital@gmail.com" },
];
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(users);
}
