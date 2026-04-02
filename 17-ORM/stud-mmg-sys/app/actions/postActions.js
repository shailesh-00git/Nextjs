"use server";

import prisma from "@/lib/prisma";
export async function createPost(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const department = formData.get("department");

  await prisma.post.create({
    data: { name, email, department },
  });
}
