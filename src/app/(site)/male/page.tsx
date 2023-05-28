import { getMaleProducts } from "../../../../sanity/sanity-utils";
import Image from "next/image";


export default async function Male() {
  const maleProduct = await getMaleProducts();
   
  return (
    <main>
      {maleProduct.map((mProduct) => (
        <div key={mProduct._id}>
          {mProduct.name}
          {mProduct.image && (
            <Image
              src={mProduct.image}
              width={400}
              height={400}
              alt={mProduct.name}
            />
          )}
        </div>
      ))}
    </main>
  );
}
