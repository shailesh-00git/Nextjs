import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Form from "next/form";

async function createPost(formData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  revalidatePath("/post");
//   redirect("/post");
}

export default function NewPost() {
  return (
    <main className="max-w-7xl mx-auto m-5 ">
      <h1 className="text-3xl font-semibold mb-5 text-center">Create Post</h1>
      <Form action={createPost} className="p-5 rounded-lg border w-100">
        <div className="mb-3">
          <label htmlFor="title" className="block mb-2 text-2xl">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 text-2xl">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className="border w-full rounded-lg focus:ring-0.1 ring-gray-100 p-2"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-2 bg-green-800 text-white w-full text-lg rounded-2xl mt-5"
        >
          Create
        </button>
      </Form>
    </main>
  );
}
