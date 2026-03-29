import prisma from "@/lib/prisma";
export default async function Posts() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
  return (
    <main className="max-w-8xl p-10">
      <h1 className="text-3xl my-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-3">
            <div className="p-3 border rounded-lg w-100">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
