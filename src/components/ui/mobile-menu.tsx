"use client";

import * as React from "react";
import { MenuIcon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="sm:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>Add Contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
