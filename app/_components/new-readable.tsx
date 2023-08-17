import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default function NewReadable() {
  const addReadable = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"));
    const author = String(formData.get("author"));
    const type = String(formData.get("type"));
    const status = String(formData.get("status"));
    const progress = String(formData.get("progress"));

    const supabase = createServerComponentClient<Database>({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("readables").insert({
        title,
        author,
        type,
        progress,
        status,
        reader_id: user.id,
      });
    }
  };
  return (
    <details className="dropdown">
      <summary className="m-1 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounde border-blue-400">Add Readable</summary>
      <form
        className="flex flex-col gap-1 border bg-slate-800"
        action={addReadable}
      >
        <label htmlFor="title">Title:</label>
        <input className="text-black p-1" name="title" />
        <label htmlFor="author">Author:</label>
        <input className="text-black p-1" name="author" />
        <label htmlFor="type">Type:</label>
        <input className="text-black p-1" name="type" />
        <label htmlFor="status">Status:</label>
        <input className="text-black p-1" type="status" />
        <label htmlFor="progress">Progress:</label>
        <input className="text-black p-1" type="progress" />
        <input className="btn mt-1 bg-slate-900 text-white" type="submit" />
      </form>
    </details>
  );
}
