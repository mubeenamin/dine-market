import { getProducts } from "../../../../sanity/sanity-utils";
import Image from "next/image";


export default async function Kids() {
  const product = await getProducts();
   
  return (
    <main>
      {product.map((product) => (
        <div key={product._id}>
          {product.name}
          {product.image && (
            <Image
              src={product.image}
              width={400}
              height={400}
              alt={product.name}
            />
          )}
        </div>
      ))}
    </main>
  );
}