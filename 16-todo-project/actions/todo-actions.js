"use server";
import { revalidatePath } from "next/cache";
import connectdb from "@/lib/db";
import Todo from "@/model/todo";
import { createTodoSchema } from "@/validations/todo";

export async function createTodo(data) {
  try {
    const validatedData = createTodoSchema.parse(data);
    await connectdb();
    const todo = await Todo.create(validatedData);
    revalidatePath("/");
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      error: "Failed to create todo",
    };
  }
}
