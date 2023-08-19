import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ReaderProfile() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", user?.id);

  const reader: Profile = Array.isArray(profile) ? profile[0] : profile;

  return (
    reader && (
      <div className="m-4 flex flex-col justify-center items-center rounded-full">
        <p className="m-0 p-0 text-md text-white tracking-wider">
          {reader.username.toUpperCase()}
        </p>
        <Image
          className="rounded-full w-16 h-16"
          src={reader.avatar_url}
          width={50}
          height={50}
          alt="Reader avatar"
        />
        <div className="flex flex-col items-center justify-center space-y-0">
          <p className="m-0 p-0">Edit</p>
        </div>
      </div>
    )
  );
}
