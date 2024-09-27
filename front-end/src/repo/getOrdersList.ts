import { OrderEntity } from "../types/types";

export const getOrdersList = (): OrderEntity[] => {
  return [
    {
      orderId: "orderId",
      buyerId: "buyerId",
      productIds: ["ProductId1", "ProductId2", "ProductId3"],
      amount: 1800,
      method: "Cash On Delivery",
      deliverTo: "Arpara, Shalikha, Magura"
    },
  ];
};
