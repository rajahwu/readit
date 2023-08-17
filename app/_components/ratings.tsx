"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { rateReadable } from "../_utils/rate-readable";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Star = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div
      className="btn mask mask-star bg-slate-700"
      onClick={handleClick}
    ></div>
  );
};

export default function Rating({ readable }: { readable: ReadableWithReader }) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const getUserRating = async () => {
      const { data } = await supabase
        .from("ratings")
        .select()
        .eq("reader_id", readable.reader_id)
        .eq("readable_id", readable.id)
        .limit(1);

      // console.log(JSON.stringify(rating, null, 2));
      if (data) {
        const stars = Array.isArray(data) ? data[0] : data;
        // console.log(stars?.stars);
        setUserRating(stars?.stars);
      }
    };
    getUserRating();
  }, []);

  // console.log(userRating)

  const handleClick = (numOfStars: number) => {
    rateReadable(readable, numOfStars);
    router.refresh();
  };
  return (
    <div className="bg-amber-600 flex-1">
      <p>Reader rating: {userRating}</p>
      <p>Ratings: {readable.ratings.length}</p>

      <div className="flex p-3">
        <Star
          handleClick={() => {
            handleClick(1);
          }}
        />
        <Star handleClick={() => handleClick(2)} />
        <Star
          handleClick={() => {
            handleClick(3);
          }}
        />
        <Star
          handleClick={() => {
            handleClick(4);
          }}
        />
        <Star
          handleClick={() => {
            handleClick(5);
          }}
        />
      </div>
    </div>
  );
}
