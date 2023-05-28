import { getKidsProducts } from "../../../../sanity/sanity-utils";
import Image from "next/image";


export default async function Kids() {
  const kidsProduct = await getKidsProducts();
   
  return (
    <main>
      {kidsProduct.map((kProduct) => (
        <div key={kProduct._id}>
          {kProduct.name}
          {kProduct.image && (
            <Image
              src={kProduct.image}
              width={400}
              height={400}
              alt={kProduct.name}
            />
          )}
        </div>
      ))}
    </main>
  );
}