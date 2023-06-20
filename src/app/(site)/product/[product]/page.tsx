import Image from "next/image";
import { getProduct } from "../../../../../sanity/sanity-utils";
import { Button } from "../../components/ui/button";

type Prop = {
  params: { product: string };
};

export default async function Product({ params }: Prop) {
  const slug = params.product;
  const singleProduct = await getProduct(slug);

  return (
    <div className="grid grid-cols-4">
      <div>{singleProduct.image && (
          <Image
            src={singleProduct.image}
            width={80}
            height={60}
            alt={singleProduct.name}
            
          />
        )}</div>
      <div className="w-80 h-96 col-span-2">
        {singleProduct.image && (
          <Image
            src={singleProduct.image}
            width={1280}
            height={1160}
            alt={singleProduct.name}
            
          />
        )}
      </div>
      <div>
        <div>{singleProduct.name}</div>
        <div>{singleProduct.subcategory}</div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}
