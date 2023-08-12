"use client";
import { useRouter } from "next/navigation";
import { rateReadable } from "../utills/rate-readable";

const Star = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="btn" onClick={handleClick}>
      Star
    </div>
  );
};

export default function Rating({ readable }: { readable: ReadableWithReader }) {
  const router = useRouter();

  return (
    <>
      <p>Reader rating: </p>
      <p>
        Ratings: {readable.ratings.length} {}
      </p>

      <div className="flex p-3">
        <Star
          handleClick={() => {
            rateReadable(readable, 1);
            router.refresh();
          }}
        />
        <Star
          handleClick={() => {
            rateReadable(readable, 2);
            router.refresh();
          }}
        />
        <Star
          handleClick={() => {
            rateReadable(readable, 3);
            router.refresh();
          }}
        />
        <Star
          handleClick={() => {
            rateReadable(readable, 4);
            router.refresh();
          }}
        />
        <Star
          handleClick={() => {
            rateReadable(readable, 5);
            router.refresh();
          }}
        />
      </div>
    </>
  );
}
