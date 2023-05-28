import { PortableTextBlock } from "sanity";

export type Products = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
}