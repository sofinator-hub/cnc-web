import MobileMenu from "../components/layout/MobileMenu";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Gallery from "../components/sections/Gallery";



export default function Home() {
  return (
    <main>
      <MobileMenu />
      <Hero />
      <Services />
      <Experience />
      <Gallery />
      
      
    </main>
  );
}
