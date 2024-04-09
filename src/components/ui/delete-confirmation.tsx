"use client";

import api from "@/app/api/instance";
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
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type DeleteConfirmationProps = {
  id: string;
};

export function DeleteConfirmation({ id }: DeleteConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();

  async function handleDelete() {
    try {
      setIsLoading(true);

      const { data } = await api.delete(`/contact/${id}`);

      toast("Contact Deleted Successfully!", {
        description: `${data.contact.name} has been deleted from your phone book`,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });

      setOpenDialog(false);

      router.refresh();
    } catch (e) {
      toast("An Error Occured!", {
        description: `Failed to delete the contact`,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
          <Button
            disabled={isLoading}
            variant={"destructive"}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button disabled={isLoading} variant={"secondary"}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
