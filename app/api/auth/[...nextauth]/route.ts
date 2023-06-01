import NextAuth from "next-auth/next";
import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      //register new user
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      //Login user
      async authorize(credentials) {
        try {
          // check to see if email and password are provided
          if (!credentials.email || !credentials.password) {
            throw new Error("Please enter an email and password");
          }

          // check to see if user exists
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // if no user was found
          if (!user || !user?.hashedPassword) {
            throw new Error("Usuário não encontrado");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Senha incorreta");
          }

          return user;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
