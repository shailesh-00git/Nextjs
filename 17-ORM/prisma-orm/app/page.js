import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {posts.map((user) => (
          <li key={user.id}>
            {user.title} — {user.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
