import { useLoaderData } from "react-router-dom";
import { ProductEntity } from "../../types/types";
import { BuyProduct } from "./BuyProduct";

export const Buy = () => {
  const products = useLoaderData() as ProductEntity[];

  return (
    <section className="grid" >
      {products.map((curProduct) => <BuyProduct key={curProduct.id} product={curProduct} /> )}
    </section>
  );
};
