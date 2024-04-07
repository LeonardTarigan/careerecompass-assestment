"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

function AddPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="mx-auto max-w-screen-md px-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-lg space-y-8 rounded-lg bg-slate-50 p-5 shadow-md dark:bg-slate-900"
        >
          <h2 className="text-center text-2xl font-bold">Add a New Contact</h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Marcille"
                    className="placeholder:text-slate-300 dark:placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+62-xxx-xxxx-xxxx"
                    className="placeholder:text-slate-300 dark:placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button
              type="button"
              size={"sm"}
              variant={"secondary"}
              className="w-full"
            >
              Reset
            </Button>
            <Button
              type="submit"
              size={"sm"}
              className="w-full bg-yellow-500 font-bold hover:bg-yellow-600"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default AddPage;
