import { getContacts } from "@/api/contact/get";
import { Button } from "@/components/ui/button";
import { DeleteConfirmation } from "@/components/ui/delete-confirmation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit3Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const contacts = await getContacts();

  return (
    <main className="mb-10 max-w-screen-md px-3 md:mx-auto">
      {contacts?.length === 0 && (
        <section className="flex h-[50vh] flex-col items-center justify-center">
          <div className="relative aspect-video w-72">
            <Image src={"/empty-street.png"} alt="Empty" fill />
          </div>
          <h2 className="mb-5 text-xl font-semibold">
            Your Contact List is Empty
          </h2>
          <Link href={"/add"}>
            <Button
              size={"sm"}
              className="bg-yellow-500 text-xs font-bold hover:bg-yellow-600"
            >
              Add Contact
            </Button>
          </Link>
        </section>
      )}
      {contacts?.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead className="whitespace-nowrap">Phone Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map(
              ({ name, phone, createdAt, updatedAt, slug }, index) => {
                return (
                  <TableRow key={slug}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="shrink-0">{phone}</TableCell>
                    <TableCell className="shrink-0">{name}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Link href={`/contact/${slug}`}>
                        <Button
                          size={"icon"}
                          className="bg-yellow-500 text-xs font-bold hover:bg-yellow-600"
                        >
                          <Edit3Icon />
                        </Button>
                      </Link>
                      <DeleteConfirmation />
                    </TableCell>
                  </TableRow>
                );
              },
            )}
          </TableBody>
        </Table>
      )}
    </main>
  );
}
