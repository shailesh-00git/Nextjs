import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    orderBy: { id: "desc" },
  });

  // ─── DELETE ───────────────────────────────────────
  async function deletePost(formData) {
    "use server";
    const id = parseInt(formData.get("id"));

    await prisma.post.delete({
      where: { id },
    });

    revalidatePath("/posts");
  }

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            {/* DELETE FORM */}
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button type="submit">🗑 Delete</button>
            </form>
            {/* EDIT FORM */} <Link href={`/edit/${post.id}`}>✏️ Edit</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
