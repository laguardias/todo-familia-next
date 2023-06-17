"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prismadb";

export async function deleteTodo(id: string) {
  try {

    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    return { todo };
  } catch (error) {
    return { error };
  }
}
