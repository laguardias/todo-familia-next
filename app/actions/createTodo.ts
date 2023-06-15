"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function createTodo(title: string) {
  try {
    const currentUser = await getCurrentUser();

    const todo = await prisma.todo.create({
      data: {
        body: title,
        author: {
          connect: {
            id: currentUser?.id,
          },
        },
      },
    });
    revalidatePath("/");
    return { todo };
  } catch (error) {
    return { error };
  }
}
