import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteIcon, TrashIcon } from "lucide-react";

export function DeleteConfirmation() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          size={"icon"}
          className="text-xs text-rose-600"
        >
          <TrashIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-start">
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogDescription>
            The entry will be removed permanently. Are you sure to proceed?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-5 flex flex-col gap-1 md:gap-0">
          <Button variant={"destructive"}>Delete</Button>
          <Button variant={"secondary"}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
