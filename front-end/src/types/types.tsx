export type UserEntity = {
  id: string;
  avatarUrl: string;
  name: string;
  phoneNo: string;
  nidNo: string;
  location: string;
  email: string;
  passwordHash: string;
};

export type ProductEntity = {
  id: string;
  name: string;
  imageUrls: string[];
  price: number;
  priceUnit: string;
  minQuantity: number;
  minUnit: string;
  remainingStock: number;
  remainingStockUnit: string;
  quantityInputUnit: string;
  deliveryFee: string;
  /*
  Instead of Quantity Input consider Setting Unit Quantity & based on that set plus minus button
  */
  sellerName: string;
  sellerAvatarUrl: string;
  description: string;
  ratings: number;
  numberOfReviews: number;
};

export type SchemeEntity = {
  schemeId: string;
  schemeAmount: number;
  schemeProductImageUrl: string;
  schemeProductName: string;
  maxSchemeAmount: number;
  deliveryFee: string;
  schemerName: string;
  schemerAvatarUrl: string;
  schemeProductDescription: string;
  schemeUrl: string;
};

export type DeliverEntity = {
  id: string;
  product: ProductEntity;
  paymentMethod: string;
  from: string;
  to: string;
};

export type ReviewEntity = {
  reviewId: string;
  productId: string;
  reviewerAvatarUrl: string;
  reviewerName: string;
  rating: number;
  review?: string;
  reviewImageUrls?: string[]; // Consider this optional
};

export type OrderEntity = {
  orderId: string;
  buyerId: string;
  productIds: string[];
  amount: number;
  method: string;
  deliverTo: string;
};

export type MessageEntity = {
  senderId: string;
  receiverId: string;
  message?: string;
  imageUrl?: string;
};
