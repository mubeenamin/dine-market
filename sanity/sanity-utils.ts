import { createClient, groq } from "next-sanity";
import { Products } from "../types/Products";
import client from "./config/client-config";

export async function getProducts(): Promise<Products[]> {
  return createClient(client).fetch(
    groq`*[_type=="products"]{
            _id,
            _createAt,
            name,
            category,
            subcategory,
            price,
            currency,
            "slug":slug.current,
            "image":image.asset->url,
            content
        }`
  );
}
export async function getFemaleProducts(): Promise<Products[]> {
  return createClient(client).fetch(
    groq`*[_type=="products" && category == "Women"]{
              _id,
              _createAt,
              name,
              category,
              subcategory,
              price,
              currency,
              "slug":slug.current,
              "image":image.asset->url,
              content
          }`
  );
}
export async function getMaleProducts(): Promise<Products[]> {
  return createClient(client).fetch(
    groq`*[_type=="products" && category == "Men"||"men"]{
              _id,
              _createAt,
              name,
              category,
              subcategory,
              price,
              currency,
              "slug":slug.current,
              "image":image.asset->url,
              content
          }`
  );
}
export async function getKidsProducts(): Promise<Products[]> {
  return createClient(client).fetch(
    groq`*[_type=="products" && category == "Kids"||"kids"]{
              _id,
              _createAt,
              name,
              category,
              subcategory,
              price,
              currency,
              "slug":slug.current,
              "image":image.asset->url,
              content
          }`
  );
}

export async function getProduct(slug: string): Promise<Products> {
  return createClient(client).fetch(
    groq`*[_type=="products" && slug.current== $slug][0]{
              _id,
              _createAt,
              name,
              category,
              subcategory,
              price,
              currency,
              "slug":slug.current,
              "image":image.asset->url,
              content
          }`,
          {slug}
  )
}
