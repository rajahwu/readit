"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { rateReadable } from "../_utils/rate-readable";
import { getUserRating } from "../_utils/getUserRating";

export default function Rating({ readable }: { readable: ReadableWithReader }) {
  const router = useRouter();
  const [userRating, setUserRating] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchUserRating = async () => {
      const rating = await getUserRating(readable);
      setUserRating(rating);
    };
    fetchUserRating();
  }, [readable]);


  const handleClick = (numOfStars: number) => {
    rateReadable(readable, numOfStars);
    setUserRating(numOfStars);
    router.refresh();
  };

  return (
    <div className="bg-amber-600 flex-1">
      <p>Reader rating: {userRating}</p>

      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={userRating === 1}
          onClick={() => handleClick(1)}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={userRating === 2}
          onClick={() => handleClick(2)}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={userRating === 3}
          onClick={() => handleClick(3)}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={userRating === 4}
          onClick={() => handleClick(4)}
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={userRating === 5}
          onClick={() => handleClick(5)}
        />
      </div>
      <p>Ratings: {readable.ratings.length}</p>
    </div>
  );
}
