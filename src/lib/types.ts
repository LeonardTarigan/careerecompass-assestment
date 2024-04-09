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
