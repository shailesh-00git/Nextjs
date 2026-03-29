import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import Form from "next/form";

export default async function EditPost({ params }) {
  const { id: rawId } = await params;
  const id = parseInt(rawId);

  // fetch the existing post
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  // ─── UPDATE ───────────────────────────────────────
  async function updatePost(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");
    const published = formData.get("published") === "on";

    await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        published,
      },
    });

    revalidatePath("/post");
    redirect("/post");
  }

  return (
    <main className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-600 mb-4">
        Edit Post
      </h1>
      <Form
        action={updatePost}
        className="p-5 border rounded-lg  w-100 space-y-4"
      >
        <div>
          <label htmlFor="title" className="text-2xl block">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-2xl">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            defaultValue={post.content || ""}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="published" className="block text-2xl">
            Published
          </label>
          <input
            type="checkbox"
            id="published"
            name="published"
            defaultChecked={post.published}
          />
        </div>

        <button
          type="submit"
          className="w-full founded text-white bg-blue-800 py-2 rounded-2xl"
        >
          Save Changes
        </button>
      </Form>
    </main>
  );
}
