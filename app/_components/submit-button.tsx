"use client";

import { useRouter } from "next/navigation";

export default function SubmitButton({ value }: { value: string }) {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked")
    router.refresh();
  };

  return (
    <button
      className="btn mt-1 bg-slate-900 text-white"
      type="submit"
      value={value}
      onClick={handleClick}
    />
  );
}
