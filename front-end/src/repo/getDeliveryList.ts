import { DeliverEntity } from "../types/types";
import { getProductList } from "./getProductList";

export const getDeliveryList = (): DeliverEntity[] => {
  const productList = getProductList();

  return [{
    id: "deliveryId",
    product: productList[0],
    paymentMethod: "Cash on Delivery",
    from: "Uttar Baghbari, Madina Market, Sylhet Sadar, Sylhet",
    to: "Arpara, Shalikha, Magura",
  }];
};
