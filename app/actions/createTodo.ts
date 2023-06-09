"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";

export async function createTodo(title: string, authorId: string) {
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
