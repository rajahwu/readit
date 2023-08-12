import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Readable } from "@/lib/database.types";

export const rateReadable = async (readable: Readable, rating: number) => {
  const supabase = createClientComponentClient<Database>();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    if (!readable.reader_has_rated_readable) {
      const { data, error } = await supabase.from("ratings").insert({
        reader_id: user.id,
        readable_id: readable.id,
        stars: rating,
      });

      if (error) {
        console.log("Error inserting rating", error);
      } else {
        console.log("Rating inserted:", data);
      }
    } else {
      const { data, error } = await supabase
        .from("ratings")
        .delete()
        .match({ reader_id: user.id, readable_id: readable.id })
        .then(() =>
          supabase.from("ratings").insert({
            reader_id: user.id,
            readable_id: readable.id,
            stars: rating,
          })
        );

      if (error) {
        console.log("Error updating rating", error);
      } else {
        console.log("Rating updated:", data);
      }
    }
  }
};
