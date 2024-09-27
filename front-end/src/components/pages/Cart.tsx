import { useLoaderData } from "react-router-dom";
import { ProductEntity } from "../../types/types";
import { Button } from "../UI/Button";
import { ProductItem } from "../UI/ProductItem";

export const Cart = () => {
  const products = useLoaderData() as ProductEntity[];

  return (
    <section className="flex-col gap-section">
      <article className="flex-col">
        {products.map((curProduct) => (
          <ProductItem key={curProduct.id} product={curProduct} />
        ))}
      </article>
      <article className="flex-col">
        <h2 className="text-large text-green">Summary</h2>
        <div className="flex">
          <span className="text-semi-bold">Sub Total: </span>
          <span>&#2547;1560</span>
        </div>
        <div className="flex">
          <span className="text-semi-bold">Delivery Fee:</span>
          <span>&#2547;320</span>
        </div>
        <div className="flex">
          <span className="text-semi-bold">Discount:</span>
          <span className="text-green">&#2547;80</span>
        </div>
        <hr />
        <div className="flex">
          <span className="text-semi-bold">Grant Total:</span>
          <span className="text-error">&#2547;1800</span>
        </div>
        <Button
          title="Check Out"
          onButtonClick={() => {
            /* TODO */
          }}
          className="btn btn-primary vertical"
        />
      </article>
    </section>
  );
};
