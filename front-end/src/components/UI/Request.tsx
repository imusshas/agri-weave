import { getProductList } from "../../repo/getProductList";
import { ProductEntity } from "../../types/types";
import { AcceptProduct } from "./AcceptProduct";
import { ProductForm } from "./ProductForm";

export const Request = () => {
  const products = getProductList() as ProductEntity[];

  return (
    <section className="flex-col gap-section">
      <ProductForm request />
      <h2 className="text-large text-green" >Requested Products</h2>
      <section className="grid">
        {products.map((curProduct) => (
          <AcceptProduct key={curProduct.id} product={curProduct} request />
        ))}
      </section>
    </section>
  );
};
