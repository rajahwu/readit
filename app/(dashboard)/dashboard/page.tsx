import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NavBar, AboutMe } from "../../_components";
import ReadingListHeader from "@/app/_components/reading-list-header";
import ReadingList from "./reading-list";
import DashboardLayout from "../_dashboard-layout/layout";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }
  const DashboardContent = () => (
    <div className="m-4">
      <ReadingListHeader />
      <ReadingList />
    </div>
  );

  return (
    <>
      <NavBar />
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
      <AboutMe />
    </>
  );
}
