import React from "react";
import { ProductEntity } from "../../types/types";
import { Button } from "./Button";

interface AcceptProductProps {
  product: ProductEntity;
  request?: boolean;
}

export const AcceptProduct: React.FC<AcceptProductProps> = ({
  product: {
    imageUrls,
    price,
    priceUnit,
    name,
    minQuantity,
    minUnit,
    deliveryFee,
    sellerAvatarUrl,
    sellerName,
    description,
  },
  request,
}) => {
  return (
    <article className="box-shadow">
      <img src={imageUrls[0]} alt={name} />
      <div className="flex-col padding">
        <div className="flex">
          <h3 className="text-medium">
            &#2547;{price} {priceUnit}
          </h3>
          {request ? (
            <Button
              title={"Delete"}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-error"
            />
          ) : (
            <Button
              title={"Accept"}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-product"
            />
          )}
        </div>
        <h2>{name}</h2>
        <div>
          <p className="text-green">
            Required Quantity: {minQuantity} {minUnit}
          </p>
          <p className="text-light">Delivery Fee: {deliveryFee}</p>
        </div>
        <div className="flex flex-start">
          <img src={sellerAvatarUrl} alt={sellerName} className="seller-img" />
          <span>{sellerName}</span>
        </div>
        <hr />
        <p className="text-light height-72-fixed">{description}</p>
      </div>
    </article>
  );
};
