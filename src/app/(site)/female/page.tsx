import Link from "next/link";
import { getFemaleProducts } from "../../../../sanity/sanity-utils";
import Image from "next/image";
export default async function Female() {
  const femaleProduct = await getFemaleProducts();

  return (
    <main className="grid md:grid md:grid-cols-3 md:gap-x-5 lg:grid lg:grid-cols-4 lg:gap-x-5 gap-y-4">
      {femaleProduct.map((fProduct) => (
        <div key={fProduct._id}>
          <Link href={`/product/${fProduct.slug}`}>
          {fProduct.image && (
            <Image
              src={fProduct.image}
              width={400}
              height={400}
              alt={fProduct.name}
            />
          )}
          <div className="text-lg font-bold"> {fProduct.name} </div>
          <h2>{fProduct.subcategory}</h2>
          <div className="flex text-lg font-bold gap-x-1">
            <h1>{fProduct.currency}</h1>
            <h1>{fProduct.price}</h1>
          </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
