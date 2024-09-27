import { useLoaderData } from "react-router-dom";
import { ProductEntity } from "../../types/types";
import { ProductItem } from "../UI/ProductItem";

export const Wishlist = () => {
  const products = useLoaderData() as ProductEntity[];

  return (
    <section>
      {products.map((curProduct) => (
        <ProductItem key={curProduct.id} product={curProduct} wishlist />
      ))}
    </section>
  );
};
