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
import Logo from "@/components/ui/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  last_modified: z.string(),
  created_at: z.string(),
});

function ContactDetailPage() {
  const params = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      last_modified: "",
      created_at: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="mx-auto max-w-screen-md px-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative z-0 space-y-4 overflow-hidden rounded-lg bg-slate-50 p-5 shadow-md dark:bg-slate-900"
        >
          <Logo className="absolute -right-10 -top-10 -z-10 h-64 w-64 fill-slate-100 dark:fill-slate-800" />

          <h2 className="text-center text-2xl font-bold">Contact Detail</h2>
          <hr />
          <div className="grid gap-2 space-y-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="order-1">
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
              name="last_modified"
              render={({ field }) => (
                <FormItem className="order-3 md:order-2">
                  <FormLabel>Last Modified</FormLabel>
                  <FormControl>
                    <Input
                      disabled
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
                <FormItem className="order-2 md:order-3">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+62-xxx-xxxx-xxxx"
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
              name="created_at"
              render={({ field }) => (
                <FormItem className="order-4">
                  <FormLabel>Created At</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      className="placeholder:text-slate-300 dark:placeholder:text-slate-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 pt-5">
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
              Edit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default ContactDetailPage;
