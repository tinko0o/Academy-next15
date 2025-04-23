import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews: number | null;
  onlyStar?: boolean;
}

export default function RatingStar({
  rating,
  reviews,
  onlyStar = false,
}: RatingProps) {
  let numericRating = Number(rating);

  if (isNaN(numericRating)) {
    return null;
  }
  if (numericRating > 5) {
    numericRating = 5;
  }
  const fullStars = Math.floor(numericRating);
  const halfStar = numericRating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1 text-[#b4690e]">
      {!onlyStar && (
        <span className="font-bold text-sm">{numericRating.toFixed(1)}</span>
      )}
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return (
              <Star
                key={index}
                fill="currentColor"
                className="w-3 h-3 text-yellow-400"
              />
            );
          }
          if (index === fullStars && halfStar) {
            return (
              <StarHalf
                key={index}
                fill="currentColor"
                className="w-3 h-3 text-yellow-400"
              />
            );
          }
          return (
            <Star key={index} fill="none" className="w-3 h-3 text-gray-300" />
          );
        })}
      </div>
      {reviews && !onlyStar && (
        <span className="text-gray-500 text-sm">
          ({reviews.toLocaleString()})
        </span>
      )}
    </div>
  );
}
