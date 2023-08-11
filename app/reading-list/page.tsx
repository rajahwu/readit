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
      <div className="flex bg-black justify-start p-4 mx-auto">
        {/* <div>
          <h2 className="text-2xl">New Readable</h2>
          <NewReadable />
        </div> */}
        <div className="bg-slate-100 border border-base-300">
          {readablesWithNotes?.map((readable) => {
            console.log(readable);
            return (
              <div
                className="card-body text-slate-800 hover:bg-slate-500 hover:text-slate-200"
                key={readable.id}
              >
                <h3 className="card-title">{readable.type}</h3>
                <div className="flex">
                  <div className="card-body">
                    <p>{readable.profiles?.name}</p>
                    <p>{readable.profiles?.username}</p>
                    <p>{readable.profiles?.avatar_url}</p>
                  </div>
                  <div className="card-body">
                    <p>{readable.title}</p>
                    <p>{readable.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
