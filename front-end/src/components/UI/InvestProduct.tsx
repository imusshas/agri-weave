import React from "react";
import { SchemeEntity } from "../../types/types";
import { Button } from "./Button";

interface InvestProductProps {
  scheme: SchemeEntity;
  invest?: boolean;
}

export const InvestProduct: React.FC<InvestProductProps> = ({
  scheme: {
    schemeProductImageUrl,
    schemeAmount,
    schemeProductName,
    maxSchemeAmount,
    schemerName,
    schemerAvatarUrl,
    schemeProductDescription,
    schemeUrl,
  },
  invest,
}) => {
  return (
    <article className="box-shadow" >
      <img src={schemeProductImageUrl} alt={schemeProductName} />
      <div className="flex-col padding" >
        <div className="flex">
          <h3 className="text-medium" >&#2547;{schemeAmount}</h3>
          {invest ? (
            <Button
              title={"Invest"}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-product"
            />
          ) : (
            <Button
              title={"Delete"}
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-error"
            />
          )}
        </div>
        <h2>{schemeProductName}</h2>
        <p className="text-error" >Maximum Invest: &#2547;{maxSchemeAmount}</p>
        {invest && (
          <div className="flex flex-start">
            <Button
              title="-"
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-inc-dec"
            />
            <span className="text-medium" >1</span>
            <Button
              title="+"
              onButtonClick={() => {
                /* TODO */
              }}
              className="btn-inc-dec"
            />
          </div>
        )}
        <div className="flex flex-start" >
          <img src={schemerAvatarUrl} alt={schemerName} className="seller-img" />
          <span>{schemerName}</span>
        </div>
        <hr />
        <p>{schemeProductDescription}</p>
        <hr />
        <a href={schemeUrl}>View Scheme</a>
      </div>
    </article>
  );
};
