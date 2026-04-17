import Hero from "../components/sections/Hero";
import Navbar from "../components/layout/Navbar";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Gallery from "../components/sections/Gallery";
import Sidebar from "../components/layout/Sidebar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Services />
      <Experience />
      <Gallery />
      
    </main>
  );
}
