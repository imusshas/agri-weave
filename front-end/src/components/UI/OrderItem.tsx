import React from "react";
import { OrderEntity } from "../../types/types";

interface OrderItemProps {
  order: OrderEntity;
}

export const OrderItem: React.FC<OrderItemProps> = ({ order: { orderId, method, amount, deliverTo } }) => {
  return (
    <article className="flex-col box-shadow padding">
      <p className="text-semi-bold">
        Order ID: <span className="text-light" >{orderId}</span>
      </p>
      <p className="text-semi-bold text-medium">
        Amount: <span className="text-medium text-error" >{amount}</span>
      </p>
      <p className="text-semi-bold">
        Payment Method: <span>{method}</span>
      </p>
      <p className="text-semi-bold">
        Delivered To: <span className="text-green" >{deliverTo}</span>
      </p>
    </article>
  );
};
