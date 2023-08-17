"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function DeleteReadableButton({
  readable,
}: {
  readable: Readable;
}) {
  const router = useRouter();

  const handleDelete = async () => {
    const supabase = createClientComponentClient<Database>();
    await supabase.from("readables").delete().eq("id", readable.id);
    router.refresh();
  };

  return (
    <button
      className="m-1 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounde border-blue-400"
      onClick={handleDelete}
    >
      Delete Readable
    </button>
  );
}
