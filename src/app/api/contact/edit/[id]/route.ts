import prisma from "@/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;

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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;

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

    const updatedContactData = await req.json();

    if (!updatedContactData?.name && !updatedContactData?.phone) {
      return NextResponse.json(
        { error: "New name or phone is required" },
        { status: 400 },
      );
    }

    const updatedContact = await prisma.contact.update({
      where: {
        id: id,
      },
      data: updatedContactData,
    });

    return NextResponse.json({
      message: "Contact updated successfully",
      contact: updatedContact,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update contact", details: error },
      { status: 500 },
    );
  }
}
