import { useLoaderData } from "react-router-dom";
import { ProductEntity } from "../../types/types";
import { AcceptProduct } from "./AcceptProduct";

export const Accept = () => {
  const products = useLoaderData() as ProductEntity[];

  return (
    <section className="grid" >
      {products.map((curProduct) => (
        <AcceptProduct key={curProduct.id} product={curProduct} />
      ))}
    </section>
  );
};
