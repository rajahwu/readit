import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default function NewNote({
  readable,
}: {
  readable: ReadableWithReader;
}) {
  const addNoteToReadable = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const reference = String(formData.get("reference"));

    const supabase = createServerComponentClient<Database>({ cookies });
    const notes = supabase.from("notes").select();
    // console.log(JSON.stringify(notes, null, 2))

    const { data, error } = await supabase.from("notes").insert({
      title,
      content,
      //   reference,
      reader_id: readable.reader.id,
      readable_id: readable.id,
    });
    if (error) {
      console.log("Error inserting note", error);
    } else {
      console.log("Note inserted:", data);
    }
  };

  return (
    <div className="bg-lime-600">
      <details className="dropdown mb-32">
        <summary className="m-1 btn">New Note</summary>
        <form
          className="flex flex-col gap-1 border bg-slate-800 menu dropdown-content z-[1]"
          action={addNoteToReadable}
        >
          <label htmlFor="title">Title:</label>
          <input className="text-black p-1" name="title" />
          <label htmlFor="content">Notes:</label>
          <input className="text-black p-1" name="content" />
          <label htmlFor="reference">Reference:</label>
          <input className="text-black p-1" name="reference" />
          <input className="btn mt-1 bg-slate-900 text-white" type="submit" />
        </form>
      </details>
    </div>
  );
}
