import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import {
  ReadableTitle,
  ReaderProfile,
  ReadableDetailsCard,
} from "@/app/_components";

export const dynamic = 'force-dynamic';

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

  return readables?.map((readable) => {
    return (
      <div
        className="card-body text-slate-800 hover:bg-slate-500 hover:text-slate-200"
        key={readable.id}
      >
        <ReadableTitle readable={readable} />
        <div className="flex">
          <ReaderProfile readable={readable} />
          <ReadableDetailsCard readable={readable} />
        </div>
      </div>
    );
  });
}
