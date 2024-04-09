import prisma from "@/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  try {
    const contact = await prisma.contact.findUnique({ where: { slug } });

    return NextResponse.json({ contact });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const id = params.slug;

    if (!id) {
      return NextResponse.json({ error: "Id is required" }, { status: 400 });
    }

    const existingContact = await prisma.contact.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    await prisma.contact.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Contact deleted successfully",
      contact: existingContact,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete contact", details: error },
      { status: 500 },
    );
  }
}
