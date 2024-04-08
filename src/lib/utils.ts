import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculatePagesToShow = (
  currentPage: number,
  totalPages: number,
  pagesToShow = 5,
) => {
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const pagesCount = Math.min(pagesToShow, totalPages);

  return Array.from({ length: pagesCount }, (_, i) => startPage + i);
};
