import { useLoaderData } from "react-router-dom";
import { ProductEntity, ReviewEntity } from "../../types/types";
import { BuyProduct } from "../UI/BuyProduct";
import { Review } from "../UI/Review";
import { getReviewList } from "../../repo/getReviewList";

export const ProductDetails = () => {
  const product = useLoaderData() as ProductEntity;
  const reviews = getReviewList() as ReviewEntity[];

  return (
    <section className="flex-col gap-section">
      <BuyProduct product={product} showDetails />
      <div>
        <h2 className="text-large text-green vertical">Reviews</h2>
        <hr className="vertical" />
        {reviews.map((curReview) => (
          <Review key={curReview.reviewId} review={curReview} />
        ))}
      </div>
    </section>
  );
};
