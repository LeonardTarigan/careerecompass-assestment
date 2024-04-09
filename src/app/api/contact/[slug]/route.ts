import prisma from "@/db/client";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  try {
    const contact = await prisma.contact.findUnique({ where: { slug } });

    return Response.json(contact);
  } catch (error) {
    return Response.json(
      { error },
      {
        status: 500,
      },
    );
  }
}
