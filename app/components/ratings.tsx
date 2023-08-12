"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Star = ({ handleClick }) => {
  return (
    <div className="btn" onClick={handleClick}>
      Star
    </div>
  );
};

export default function Rating({ readable }) {
  const [rating, setRating] = useState(0);
  const router = useRouter();

  const rateReadable = async (rating: number) => {
    const supabase = createClientComponentClient<Database>();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      if (!readable.reader_has_rated_readable) {
        await supabase.from("ratings").insert({
          reader_id: user.id,
          readable_id: readable.id,
          stars: rating,
        });
        router.refresh();
      } else {
        const { data, error } = await supabase
          .from("ratings")
          .update({ stars: rating })
          .eq("reader_id", user.id)
          .eq("readable_id", readable.id);

        if (error) {
          console.log("Error updating rating", error);
        } else {
          console.log("Rating updated:", data);
        }
        router.refresh();
      }
    }
  };

  return (
    <>
      <p>Reader rating: {rating}</p>
      <p>
        Ratings: {readable.ratings.length} {}
      </p>

      <div className="flex p-3">
        <Star handleClick={() => setRating(1)} />
        <Star handleClick={() => setRating(2)} />
        <Star handleClick={() => setRating(3)} />
        <Star handleClick={() => setRating(4)} />
        <Star handleClick={() => setRating(5)} />
      </div>

      <button
        className="btn"
        onClick={() => {
          rateReadable(rating);
        }}
      >
        Rate
      </button>
    </>
  );
}
