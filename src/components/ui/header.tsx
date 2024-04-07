"use client";

import { Outfit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Logo from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ModeToggle } from "./mode-toggle";

const logoFont = Outfit({ subsets: ["latin"] });

function Header() {
  const path = usePathname();
  console.log(path);

  return (
    <header className="mx-auto mb-5 max-w-screen-md">
      <nav className="flex items-center justify-between gap-10 px-5 py-5 md:px-0">
        <Link href={"/"} className="flex items-center gap-1">
          <Logo className="h-10 w-10 fill-yellow-500 transition-colors duration-150 hover:fill-yellow-700" />
          <div className={`${logoFont.className} text-2xl font-semibold`}>
            Dia<span className="text-yellow-500">Link.</span>
          </div>
        </Link>

        <ul className="flex items-center gap-2">
          <li className="hidden sm:block">
            <Button variant={"ghost"}>
              <Link
                href={"/"}
                className={`font-semibold ${path === "/" && "text-yellow-500"}`}
              >
                Home
              </Link>
            </Button>
          </li>
          <li className="hidden sm:block">
            <Button variant={"ghost"}>
              <Link
                href={"/add"}
                className={`font-semibold ${path === "/add" && "text-yellow-500"}`}
              >
                Add Contact
              </Link>
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li>
            <MobileMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
