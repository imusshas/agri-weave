import { ProductEntity } from "../types/types";
import { getProductList } from "./getProductList";

export const getProductById = (id: string): Promise<ProductEntity | undefined> => {
  const productList = getProductList();

  return Promise.resolve(productList.find((curProduct) => curProduct.id === id));
};
