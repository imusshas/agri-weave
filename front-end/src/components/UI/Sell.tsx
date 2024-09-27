import { ProductForm } from "./ProductForm";
import { ProductEntity } from "../../types/types";
import { BuyProduct } from "./BuyProduct";
import { getProductList } from "../../repo/getProductList";

export const Sell = () => {
  const products = getProductList() as ProductEntity[];

  return (
    <section className="flex-col gap-section" >
      <ProductForm />
      <h2 className="text-large text-green" >Sold Products</h2>
      <section className="grid" >
        {products.map((curProduct) => (
          <BuyProduct key={curProduct.id} product={curProduct} sellProduct />
        ))}
      </section>
    </section>
  );
};
