"use server";
import { prisma } from "../../lib/prisma";
export async function createPost(formData) {
  const id = formData.get("id");
  const email = formData.get("email");
  const password = formData.get("password");

  await prisma.user.create({
    data: { email, password },
  });
}
