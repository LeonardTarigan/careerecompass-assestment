import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="mx-auto flex h-screen w-full max-w-screen-md flex-col items-center justify-center px-5 text-center">
      <h1 className="text-9xl font-bold text-yellow-500">404</h1>
      <p className="mb-4 text-4xl font-semibold">Page Not Found</p>
      <p className="text-slate-500">
        The page you are looking for might have been removed or temporarily
        unavailable
      </p>
      <Button className="mt-20 bg-yellow-500 font-bold hover:bg-yellow-600">
        <Link href={"/"}>Back to Home Page</Link>
      </Button>
    </main>
  );
}

export default NotFound;
