import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request){
  const body = await request.json();
  const {nome, sobrenome, email, senha, sexo, cor, idade} = body;

  if(!email || !senha){
    return new NextResponse('Missing Fields', {status: 400})
  }

  const exist = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if(exist) {
    throw new Error('Email already exists')
  }

  const hashedPassword = await bcrypt.hash(senha, 10);

  const user = await prisma.user.create({
    data: {
      nome,
      sobrenome,
      email,
      hashedPassword,
      sexo,
      cor,
      idade,
    },
  });

  return NextResponse.json(user);
}

//not need try and catch in this file?