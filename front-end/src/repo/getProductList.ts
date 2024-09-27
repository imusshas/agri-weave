import { ProductEntity } from "../types/types";

export const getProductList = (): ProductEntity[] => {
  return [
    {
      id: "productId",
      name: "Product Name",
      imageUrls: ["/vegetables.jpg"],
      price: 300,
      priceUnit: "kg",
      minQuantity: 500,
      minUnit: "gm",
      remainingStock: 10_000,
      remainingStockUnit: "kg",
      quantityInputUnit: "string",
      deliveryFee: "Dhaka ৳60 | Outside ৳120 ",
      sellerName: "Product Seller",
      sellerAvatarUrl: "/seller.jpg",
      description: "Description",
      ratings: 3.7,
      numberOfReviews: 22,
    },
  ];
};
