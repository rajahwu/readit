import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "../components/SiteNav/NavBar";
import AboutMe from "../components/AboutMe";
import Rating from "../components/ratings";
import NewReadable from "../components/new-readable";

export default async function ReadingList() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from("readables")
    .select("*, profiles(*), ratings(stars, readable_id, reader_id), notes(*)");

  const readables =
    data?.map((readable) => ({
      ...readable,
      reader_has_rated_readable: !!readable.ratings.find(
        (rating) =>
          rating.reader_id === session?.user.id &&
          rating.readable_id === readable.id
      )?.stars,
    })) ?? [];

  console.log(JSON.stringify(readables, null, 2));
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
          {readables?.map((readable) => {
            // console.log(readable);
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
                    <Rating readable={readable} />
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
      </div>
      <AboutMe />
    </div>
  );
}
