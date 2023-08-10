import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "../components/SiteNav/NavBar";
import AboutMe from "../components/AboutMe";

export default async function ReadingList() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: readables } = await supabase.from("readables").select();

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
      <pre style={{ backgroundColor: "black", paddingBottom: "50px" }}>
        {JSON.stringify(readables, null, 2)}
      </pre>
      <AboutMe />
    </div>
  );
}
