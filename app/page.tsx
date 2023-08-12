import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import NavBar from "./components/SiteNav/NavBar";
import SplashPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
/**
 * Home page component servers splash page
 * @component 
 */

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/reading-list");
  }

  return (
    <>
      <NavBar />
      <SplashPage />
      <AboutMe />
    </>
  );
}
