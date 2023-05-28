import { getFemaleProducts } from "../../../../sanity/sanity-utils";
import Image from "next/image";


export default async function Female() {
  const femaleProduct = await getFemaleProducts();
   
  return (
    <main className="grid grid-cols-4 gap-x-5">
      {femaleProduct.map((fProduct) => (
        <div key={fProduct._id}>
          {fProduct.name}
          {fProduct.image && (
            <Image
              src={fProduct.image}
              width={400}
              height={400}
              alt={fProduct.name}
            />
          )}
        </div>
      ))}
    </main>
  );
}
