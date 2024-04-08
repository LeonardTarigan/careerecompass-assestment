import prisma from "@/db/client";
import { Contact } from "@prisma/client";

export async function getContacts(): Promise<Contact[]> {
  const contacts = await prisma.contact.findMany();

  return contacts;
}
