"use client";

import api from "@/app/api/instance";
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
import SkeletonFormDetail from "@/components/ui/skeleton-form-detail";
import {
  EditContactPayload,
  EditContactReponse,
  GetContactDetailResponse,
} from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  updatedAt: z.string(),
  createdAt: z.string(),
});

function ContactDetailPage() {
  const [initialData, setInitialData] = useState<Contact>();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      updatedAt: "",
      createdAt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const payload: EditContactPayload = {
        name: values.name,
        phone: values.phone,
      };

      const { data } = await api.put<EditContactReponse>(
        `/contact/edit/${initialData?.id}`,
        payload,
      );

      let toastMessage;
      const initialName = initialData?.name;
      const initialPhone = initialData?.phone;
      const currentName = data.contact.name;
      const currentPhone = data.contact.phone;

      if (initialName === currentName && initialPhone === currentPhone) {
        toastMessage = `${initialName}'s name and phone number has been updated`;
      } else if (initialName === currentName) {
        toastMessage = `${initialName}'s phone number has been changed to ${currentPhone}`;
      } else if (initialPhone === currentPhone) {
        toastMessage = `${initialName}'s name has been changed to ${currentName}`;
      }

      toast("Contact Updated Successfully!", {
        description: toastMessage,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });

      router.refresh();
    } catch (e) {
      toast("An Error Occured!", {
        description: `Failed to update the contact`,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const getDetail = async () => {
      const { data } = await api.get<GetContactDetailResponse>(
        `/contact/${params.slug}`,
      );
      setInitialData(data.contact);

      form.setValue("name", data?.contact.name);
      form.setValue("phone", data?.contact.phone);
      form.setValue(
        "createdAt",
        formatTimestamp(data?.contact.createdAt.toString()),
      );
      form.setValue(
        "updatedAt",
        formatTimestamp(data?.contact.updatedAt.toString()),
      );
    };

    getDetail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <main className="mx-auto max-w-screen-md px-3">
      {!initialData && <SkeletonFormDetail />}
      {initialData && (
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
                name="updatedAt"
                render={({ field }) => (
                  <FormItem className="order-3 md:order-2">
                    <FormLabel>Updated At</FormLabel>
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
                name="createdAt"
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
                disabled={
                  (!form.getFieldState("name").isTouched &&
                    !form.getFieldState("phone").isTouched) ||
                  isLoading
                }
                className="w-full"
                onClick={() => {
                  form.setValue("name", initialData?.name);
                  form.setValue("phone", initialData?.phone);
                }}
              >
                Reset
              </Button>
              <Button
                type="submit"
                size={"sm"}
                disabled={
                  (!form.getFieldState("name").isTouched &&
                    !form.getFieldState("phone").isTouched) ||
                  isLoading
                }
                className="w-full bg-yellow-500 font-bold hover:bg-yellow-600"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      )}
    </main>
  );
}

export default ContactDetailPage;
