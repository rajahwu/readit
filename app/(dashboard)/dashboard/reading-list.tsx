import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

import { ReadableDetailsCard } from "@/app/_components";

export const dynamic = "force-dynamic";

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
      <div className="flex" key={readable.id}>
        <div className="rounded">
        <Image
          className="m-4 rounded"
          src="/book.jpg"
          alt="a pic of a book"
          width={350}
          height={400}
        />
        </div>
        <ReadableDetailsCard readable={readable} />
        <div className="text-white m-4 border border-red-600 w-56 h-56">Note | text</div>
      </div>
    );
  });
}
