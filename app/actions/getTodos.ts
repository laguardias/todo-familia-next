import prisma from "@/lib/prismadb";
import getSession from "./getSession";
import getCurrentUser from "./getCurrentUser";

const getTodos = async () => {
  try {
/*     const session = await getSession();

    if (!session?.user?.email) {
      return null;
    } */

    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return null;
    }

    console.log("getTodos functions / currentUserId:", currentUser.id);

    const todos = await prisma.todo.findMany({
      where: {
        authorId: currentUser?.id,
      },
    })
  
    return todos;
  } catch (error: any) {
    return null;
  }
}

export default getTodos;