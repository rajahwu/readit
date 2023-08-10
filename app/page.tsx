import NavBar from "./components/SiteNav/NavBar";
import SplashPage from "./components/LandingPage";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <>
      <NavBar />
      <SplashPage />
      <AboutMe />
    </>
  );
}
