"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function createTodo(title: string, authorId: string) {
  console.log("createTodo title", title);
  try {

    const todo = await prisma.todo.create({
      data: {
        body: title,
        authorId
      },
    });
    revalidatePath("/");
    return { todo };
  } catch (error) {
    return { error };
  }
}
