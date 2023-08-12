"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Readable } from '@/lib/database.types';
import { rateReadable } from "../utills/rate-readable";


const Star = ({ handleClick } : { handleClick: () => void }) => {
  return (
    <div className="btn" onClick={handleClick}>
      Star
    </div>
  );
};

export default function Rating({ readable } : { readable: Readable }) {
//   const [rating, setRating] = useState(0);
  const router = useRouter();

  
  return (
    <>
      <p>Reader rating: </p>
      <p>
        Ratings: {readable.ratings.length} {}
      </p>

      <div className="flex p-3">
        <Star handleClick={() =>  rateReadable(readable, 1)} />
        <Star handleClick={() =>  rateReadable(readable, 2)} />
        <Star handleClick={() =>  rateReadable(readable, 3)} />
        <Star handleClick={() =>  rateReadable(readable, 4)} />
        <Star handleClick={() =>  rateReadable(readable, 5)} />
      </div>

      <button
        className="btn"
        onClick={() => {
        //   rateReadable(rating);
        console.log("clicked")
        }}
      >
        Rate
      </button>
    </>
  );
}
