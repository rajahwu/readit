import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "../components/SiteNav/NavBar";
import AboutMe from "../components/AboutMe";
import Rating from "../components/ratings";
import NewReadable from "../components/new-readable";
import NewNote from "../components/new-note";

export default async function ReadingList() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from("readables")
    .select("*, profiles(*), ratings(*), notes(*)");

  const readables =
    (data?.map((readable) => ({
      ...readable,
      reader: Array.isArray(readable.profiles)
        ? readable.profiles[0]
        : readable.profiles,
      reader_has_rated_readable: !!readable.ratings.find(
        (rating) =>
          rating.reader_id === session?.user.id &&
          rating.readable_id === readable.id
      )?.stars,
    })) as ReadableWithReader[]) ?? [];

  // console.log(JSON.stringify(readables, null, 2));
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
        <div className="bg-slate-100 border border-base-300">
          {readables?.map((readable) => {
            return (
              <div
                className="card-body text-slate-800 hover:bg-slate-500 hover:text-slate-200"
                key={readable.id}
              >
                <div className="flex flex-col justify-start card-title">
                  <h3>Title: &quot;{readable.title}&quot;</h3>
                  <h2>Type: {readable.type}</h2>
                </div>

                <div className="flex menu">
                  <div className="card-body">
                    <p>{readable.reader.name}</p>
                    <p>{readable.reader.username}</p>
                    <p>{readable.reader.avatar_url}</p>
                  </div>
                  <div className="card-body">
                    <p>{readable.title}</p>
                    <p>{readable.author}</p>
                    <div className="">
                      <NewNote readable={readables[0]} />
                    </div>
                    <div className=""> 
                      <Rating readable={readable} />
                    </div>
                    <hr />
                    <ul>
                      <h3 className="text-sm">Notes</h3>
                      {readable.notes.length
                        ? readable.notes.map((note) => (
                            <li key={note.id}>{note.title}</li>
                          ))
                        : "none"}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">New Readable</h2>
          <NewReadable />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}
