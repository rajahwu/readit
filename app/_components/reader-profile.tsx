import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ReaderProfile() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", user?.id);

  const reader = Array.isArray(profile) ? profile[0] : profile;
  return (
    <div className="">
      <p>{reader.name}</p>
      <p>{reader.username}</p>
      <p>{reader.avatar_url}</p>
    </div>
  );
}
