import prisma from "@/db/client";
import { PaginationProps } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searhParams = req.nextUrl.searchParams;

    const page: number = parseInt(searhParams.get("page") ?? "1");
    const pageSize: number = parseInt(searhParams.get("pageSize") ?? "10");
    const sortBy: string = searhParams.get("sortBy") ?? "name";

    const skip = (page - 1) * pageSize;

    const totalCount = await prisma.contact.count();
    const totalPage = Math.ceil(totalCount / pageSize);

    const contacts = await prisma.contact.findMany({
      skip,
      take: pageSize,
      orderBy: {
        [sortBy]: "asc",
      },
    });

    const currentPage = page;
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPage ? currentPage + 1 : null;

    const pagination: PaginationProps = {
      current: currentPage,
      total: totalPage,
      prev: prevPage,
      next: nextPage,
    };

    return NextResponse.json({ pagination, contacts });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts", details: error },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone is required" },
        { status: 400 },
      );
    }

    const payloadData = {
      name: name,
      phone: phone,
    };

    await prisma.contact.create({
      data: payloadData,
    });

    return NextResponse.json({
      message: "Contact created successfully",
      contact: payloadData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create contact", details: error },
      { status: 500 },
    );
  }
}
