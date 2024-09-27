import React from "react";
import { ProductEntity } from "../../types/types";
import { IoCartOutline } from "react-icons/io5";
import { Star } from "./Star";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../routes/routes";
import { AiOutlineDelete } from "react-icons/ai";

interface BuyProductProps {
  product: ProductEntity;
  showDetails?: boolean;
  sellProduct?: boolean;
}

export const BuyProduct: React.FC<BuyProductProps> = ({
  product: {
    id,
    imageUrls,
    price,
    priceUnit,
    name,
    minQuantity,
    minUnit,
    remainingStock,
    remainingStockUnit,
    deliveryFee,
    sellerAvatarUrl,
    sellerName,
    description,
    ratings,
    numberOfReviews,
  },
  showDetails,
  sellProduct,
}) => {
  const navigate = useNavigate();

  const handleProductClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (showDetails) return;

    navigate(`${PRODUCT}/${id}`);
  };

  const detailsCondition = showDetails ? "grid grid-2" : "cursor box-shadow";

  return (
    <article onClick={handleProductClick} className={detailsCondition}>
      <img src={imageUrls[0]} alt={name} />
      <div className="flex-col padding">
        <Star ratings={ratings} numberOfReviews={numberOfReviews} showRating />
        <div className="flex">
          <h3 className="text-medium">
            &#2547;{price} {priceUnit}
          </h3>
          {sellProduct ? (
            <Button
              icon={AiOutlineDelete}
              title="Delete"
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-error"
            />
          ) : (
            <Button
              icon={IoCartOutline}
              title="Cart"
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-product"
            />
          )}
        </div>
        <h2>{name}</h2>
        {showDetails && (
          <div className="flex-col">
            <hr />
            <p className="text-light">{description}</p>
            <hr />
          </div>
        )}
        <div>
          <p className="text-green">
            Unit Quantity: {minQuantity} {minUnit}
          </p>
          <p className="text-error">
            Remaining Stock: {remainingStock} {remainingStockUnit}
          </p>
          <p className="text-light">Delivery Fee: {deliveryFee}</p>
        </div>
        {showDetails && (
          <div className="flex flex-start">
            <img src={sellerAvatarUrl} alt={sellerName} className="seller-img" />
            <span>{sellerName}</span>
          </div>
        )}
        {!sellProduct && (
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
        )}
        {!sellProduct && showDetails && (
          <Button
            title="Add to Wishlist"
            onButtonClick={() => {
              /* TODO */
            }}
            className="btn btn-secondary vertical"
          />
        )}
      </div>
    </article>
  );
};
