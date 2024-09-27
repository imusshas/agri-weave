import React from "react";
import { ProductEntity } from "../../types/types";
import { Button } from "./Button";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

interface ProductItemProps {
  product: ProductEntity;
  wishlist?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product: { imageUrls, name, price, priceUnit, minQuantity, minUnit },
  wishlist,
}) => {
  return (
    <article className="flex flex-gap-medium box-shadow">
      <img src={imageUrls[0]} alt={name} className="product-item-img" />
      <div className="flex-col flex-1">
        <h3 className="text-medium">
          &#2547;{price} {priceUnit}
        </h3>
        <h2>{name}</h2>
        <p className="text-green">
          Quantity: {minQuantity} {minUnit}
        </p>
        <div className="flex flex-start">
          <Button
            title="-"
            onButtonClick={() => {
              /* TODO */
            }}
            className="btn-inc-dec"
          />
          <span className="text-medium">1</span>
          <Button
            title="+"
            onButtonClick={() => {
              /* TODO */
            }}
            className="btn-inc-dec"
          />
        </div>
      </div>
      <div className="flex-col padding">
        <div className="flex">
          {wishlist && (
            <Button
              icon={IoCartOutline}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-product"
            />
          )}
          <Button
            icon={AiOutlineDelete}
            onButtonClick={() => {
              /* TODO */
            }}
            className="btn-error"
          />
        </div>
      </div>
    </article>
  );
};
