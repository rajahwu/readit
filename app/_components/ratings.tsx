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

  // console.log(readable.title, userRating)

  return (
    (
      <div className="bg-amber-600 flex-1">
        <p>Reader rating: {userRating}</p>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((starCount) => (
            <input
              key={starCount}
              type="radio"
              name="rating-1"
              className="mask mask-star"
              checked={userRating === starCount}
              onClick={() => handleClick(starCount)}
              onChange={() => setUserRating(starCount)}
            />
          ))}
        </div>
        <p>Ratings: {readable.ratings.length}</p>
      </div>
    )
  );
}
