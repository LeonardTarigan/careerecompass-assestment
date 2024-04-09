"use client";

import { PaginationProps } from "@/lib/types";
import { calculatePagesToShow } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./button";

function Pagination({ current, total, prev }: PaginationProps) {
  const paginationNavItems = calculatePagesToShow(current, total);

  const router = useRouter();

  return (
    <div className="mt-10 flex w-full items-center justify-center gap-2">
      <div className="flex gap-1">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            router.push("/");
          }}
          disabled={current === 1}
          className="flex items-center disabled:text-slate-300 dark:disabled:text-slate-500"
        >
          <ChevronsLeft className="h-5 w-5" />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            router.push(`/?page=${prev}`);
          }}
          disabled={current - 1 <= 0}
          className="flex items-center disabled:text-slate-300 dark:disabled:text-slate-500"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center font-medium">
        {paginationNavItems.map((num, index) => {
          return (
            <Link
              scroll={false}
              href={`?page=${num}`}
              key={index}
              className={`rounded-md px-3 py-2 transition-colors duration-150 ${current === num ? "bg-yellow-400 text-slate-950 dark:bg-yellow-500" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              {num}
            </Link>
          );
        })}
      </div>

      <div className="flex">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {}}
          disabled={current + 1 > total}
          className="flex items-center disabled:text-slate-300 dark:disabled:text-slate-500"
        >
          <ChevronsRight className="h-5 w-5" />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {}}
          disabled={current >= total}
          className="flex items-center disabled:text-slate-300 dark:disabled:text-slate-500"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
