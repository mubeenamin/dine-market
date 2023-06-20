import { PortableTextBlock } from "sanity";

export type Products = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  subcategory:string;
  price:string,
  currency:string,
  image: string;
  content: PortableTextBlock[];
}