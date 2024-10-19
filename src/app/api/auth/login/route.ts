import { NextResponse, userAgent } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export const POST = async () => {
  const session = await getServerSession();

  const name = "Exaple example";
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[1];
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: session?.user?.email!,
      },
    });

    if (findUser) {
    return NextResponse.json(
        {
            message: "This email allready exists",
        },
        {
            status: 409,
        }
    );
    }

    const data = await prisma.user.create({
      data: {
        email: session?.user?.email!,
        password: "",
        firstName: firstName,
        lastName: lastName,
        photo: session?.user?.image!,
      },
    });
    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 0,
      },
      {
        status: 500,
      }
    );
  }
};
