import React from "react";
import { DeliverEntity } from "../../types/types";
import { Button } from "./Button";

interface DeliverProductProps {
  delivery: DeliverEntity;
  pickUp?: boolean;
}

export const DeliverProduct: React.FC<DeliverProductProps> = ({
  delivery: {
    product: { imageUrls, price, priceUnit, name, deliveryFee },
    paymentMethod,
    from,
    to,
  },
  pickUp,
}) => {
  return (
    <article className="box-shadow">
      <img src={imageUrls[0]} alt={name} />
      <div className="flex-col padding">
        <div className="flex">
          <h3 className="text-medium" >
            &#2547;{price} {priceUnit}
          </h3>
          {!pickUp && (
            <Button
              title={"Pick Up"}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-product"
            />
          )}
        </div>
        <h2>{name}</h2>
        <p className="text-light" >Delivery Free: {deliveryFee}</p>
        <p className="text-green-dark" >Payment Method: {paymentMethod}</p>
        <div>
          <p className="text-green" >From: {from}</p>
          <p className="text-error" >To: {to}</p>
        </div>
      </div>
    </article>
  );
};
