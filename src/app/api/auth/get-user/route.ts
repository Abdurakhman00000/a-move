import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const GET = async () => {
  const session = await getServerSession();
  try {
    const data = await prisma.user.findMany({
      where: {
        email: session?.user?.email!,
      },
    });
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
};
