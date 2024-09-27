import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

// import "./Star.css";

interface StarProps {
  ratings: number;
  numberOfReviews?: number;
  showRating?: boolean;
}

export const Star: React.FC<StarProps> = ({ ratings, numberOfReviews, showRating }) => {
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex flex-start">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className="text-green-dark" />
        ))}
      {hasHalfStar && <FaStarHalfAlt className="text-green-dark" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={fullStars + index + 1} className="text-green-dark" />
        ))}
      {showRating && <span className="text-light review">{ratings}</span>}
      {numberOfReviews && <span className="text-light review">({numberOfReviews} reviews)</span>}
    </div>
  );
};
