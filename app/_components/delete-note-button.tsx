"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function DeleteNoteButton({ note }: { note: Note }) {
  const router = useRouter();

  const handleDelete = async () => {
    const supabase = createClientComponentClient<Database>();
    const deletedNote = await supabase.from("notes").delete().eq("id", note.id);
    console.log(deletedNote);
    router.refresh();
  };

  return <button onClick={handleDelete}>Delete</button>;
}
