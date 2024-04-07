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

export default function HomePage() {
  return (
    <main className="mx-5 mb-10 max-w-screen-md md:mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead className="whitespace-nowrap">Phone Number</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-end">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="shrink-0">081377471625</TableCell>
                <TableCell className="shrink-0">
                  Lorem ipsum dolor sit amet
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button
                    size={"icon"}
                    className="bg-yellow-500 text-xs font-bold hover:bg-yellow-600"
                  >
                    <Edit3Icon className="fill-yellow-600" />
                  </Button>
                  <DeleteConfirmation />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
