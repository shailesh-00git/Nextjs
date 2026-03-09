"use server";

import { revalidatePath } from "next/cache";
import connectdb from "@/lib/db";
import Todo from "@/model/todo";
import { createTodoSchema } from "@/validations/todo";

export async function createTodo(data) {
  try {
    const validatedData = createTodoSchema.parse(data);

    await connectdb();

    const newTodo = await Todo.create(validatedData);

    revalidatePath("/");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newTodo)),
    };
  } catch (e) {
    console.log(e);

    return {
      success: false,
      error: "Failed to create todo",
    };
  }
}

export async function getTodo() {
  try {
    await connectdb();

    const todos = await Todo.find().sort({ createdAt: -1 }).lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todos)),
    };
  } catch (e) {
    console.log("Error fetching data", e);

    return {
      success: false,
      error: "Failed to fetch data",
    };
  }
}
