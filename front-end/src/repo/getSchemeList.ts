import { SchemeEntity } from "../types/types";

export const getSchemeList = (): SchemeEntity[] => {
  return [
    {
      schemeId: "schemeId",
      schemeAmount: 500,
      schemeProductImageUrl: "/corn.jpg",
      schemeProductName: "Scheme Product",
      maxSchemeAmount: 50_000,
      deliveryFee: "Dhaka ৳60 | Outside ৳120 ",
      schemerName: "Schemer",
      schemerAvatarUrl: "/seller.jpg",
      schemeProductDescription: "Scheme Product Description",
      schemeUrl: "Scheme Url",
    },
  ];
};
