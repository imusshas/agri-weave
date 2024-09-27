import { ReviewEntity } from "../types/types";

export const getReviewList = (): ReviewEntity[] => {
  return [
    {
      reviewId: "reviewId",
      productId: "productId",
      reviewerAvatarUrl: "/seller.jpg",
      reviewerName: "Reviewer Name",
      rating: 4.5,
      review: "Review",
      reviewImageUrls: ["/vegetables.jpg", "/vegetables.jpg", "/vegetables.jpg", "/vegetables.jpg", "/vegetables.jpg"],
    },
  ];
};
