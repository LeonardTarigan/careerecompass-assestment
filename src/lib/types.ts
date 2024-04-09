export type Contact = {
  id: string;
  name: string;
  phone: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetContactResponse = {
  pagination: PaginationProps;
  contacts: Contact[];
};

export type GetContactDetailResponse = {
  contact: Contact;
};

export type EditContactReponse = {
  message: string;
  contact: EditContactPayload;
};

export type EditContactPayload = Pick<Contact, "name" | "phone">;

export type PaginationOptions = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
};

export type PaginationProps = {
  current: number;
  total: number;
  next: number | null;
  prev: number | null;
};
