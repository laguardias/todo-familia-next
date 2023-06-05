import prisma from "@/lib/prismadb";
import getSession from "./getSession";

const getUsers = async () => {


  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;