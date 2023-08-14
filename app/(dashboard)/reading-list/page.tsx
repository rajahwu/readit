import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NavBar, AboutMe } from "../../_components";
import ReadingListHeader from "@/app/_components/reading-list-header";
import ReadingListItems from "./reading-list";

export const dynamic = "force-dynamic";

export default async function ReadingList() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <NavBar />
      <ReadingListHeader />
      <ReadingListItems />
      <AboutMe />
    </>
  );
}
