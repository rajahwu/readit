import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ReadingList() {
  const supabase = createServerComponentClient({ cookies });

  const { data: readables } = await supabase.from("readables").select();
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <pre style={{ backgroundColor: "black", paddingBottom: "300px" }}>
        {JSON.stringify(readables, null, 2)}
      </pre>
    </div>
  );
}
