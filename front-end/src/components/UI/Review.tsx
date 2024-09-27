import React from "react";
import { ReviewEntity } from "../../types/types";
import { Star } from "./Star";

interface ReviewProps {
  review: ReviewEntity;
}

export const Review: React.FC<ReviewProps> = ({
  review: { reviewerAvatarUrl, reviewerName, rating, review, reviewImageUrls },
}) => {
  return (
    <article className="flex flex-start">
      <img src={reviewerAvatarUrl} alt={reviewerName} className="seller-img self-start" />
      <div>
        <span className="text-semi-bold">{reviewerName}</span>
        <Star ratings={rating} showRating />
        <p className="vertical">{review}</p>
        <div className="grid grid-5">
          {reviewImageUrls && reviewImageUrls.map((url) => <img key={url} src={url} alt="Review Image" />)}
        </div>
      </div>
    </article>
  );
};
