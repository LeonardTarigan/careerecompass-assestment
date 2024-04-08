import prisma from "@/db/client";
import {
  GetContactResponse,
  PaginationOptions,
  PaginationProps,
} from "@/lib/types";

export async function getContacts(
  options: PaginationOptions = {},
): Promise<GetContactResponse> {
  const { page = 1, pageSize = 10, sortBy = "name" } = options;
  const skip = (page - 1) * pageSize;
  const totalCount = await prisma.contact.count();
  const totalPage = Math.ceil(totalCount / pageSize);

  const data = await prisma.contact.findMany({
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

  return {
    pagination,
    data,
  };
}
