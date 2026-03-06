// In-memory storage for users (replace with database in production)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

let nextId = 4;

export async function GET() {
  try {
    await new Promise((response) => setTimeout(response, 1000));
    return Response.json(users, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return Response.json({ error: "User ID is required" }, { status: 400 });
    }
    // recieved id  is in string format
    const numericId = parseInt(id);

    users = users.filter((user) => user.id !== numericId);
    await new Promise((response) => setTimeout(response, 1000));

    return Response.json(
      { message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    const newUser = { id: nextId++, name, email };
    users.unshift(newUser);
    await new Promise((response) => setTimeout(response, 1000));

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}
