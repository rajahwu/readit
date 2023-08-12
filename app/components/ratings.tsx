"use client";
import { useRouter } from "next/navigation";
import { rateReadable } from "../utills/rate-readable";

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

  const handleClick = (numOfStars: number) => {
    rateReadable(readable, numOfStars);
    router.refresh();
  };
  return (
    <>
      <p>Reader rating: </p>
      <p>
        Ratings: {readable.ratings.length} {}
      </p>

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
    </>
  );
}
