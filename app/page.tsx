import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import NavBar from "./_components/SiteNav/NavBar";
import SplashPage from "./_components/LandingPage";
import AboutMe from "./_components/AboutMe";
/**
 * Home page component servers splash page
 * @component
 */

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <NavBar />
      <SplashPage />
      <AboutMe />
    </>
  );
}
