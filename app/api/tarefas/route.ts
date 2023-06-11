/** Transformar o onSubmit da pagina tarefas para uma server action aqui neste arquivo e impoortar pra la */

import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export const POST = async(
  request: Request,
) => {
  
  const {body, author} = await request.json();

  try {
/*     const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
        return new NextResponse('Unauthorized', { status: 400 });
      } */
    
    
      const newTodo = await prisma.todo.create({
        data: {
            body,
            author
        },
      });


    return NextResponse.json(newTodo)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}