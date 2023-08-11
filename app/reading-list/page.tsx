import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "../components/SiteNav/NavBar";
import AboutMe from "../components/AboutMe";
import NewReadable from "../components/new-readable";

export default async function ReadingList() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: readables } = await supabase
    .from("readables")
    .select("*, profiles(*)");
  const { data: notes } = await supabase.from("notes").select();

  const readablesWithNotes = readables?.map((readable) => {
    const assocatedNotes = notes?.filter((note) => {
      return note.readable_id === readable.id;
    });
    return { ...readable, notes: assocatedNotes };
  });

  if (!session) {
    redirect("/");
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />
      <div className="flex bg-black justify-around">
        <div>
          <h2 className="text-2xl">New Readable</h2>
          <NewReadable />
        </div>
        <div className="bg-gray-400 mockup-code border border-base-300">
          <pre className="bg-gray-200 text-black">
            <span>var notes = </span>
            {JSON.stringify(readablesWithNotes, null, 2)}
          </pre>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
