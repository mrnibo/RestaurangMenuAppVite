import Footer from "@/layouts/sections/Footer";
import Hero from "@/layouts/sections/Hero";
import Items from "@/layouts/sections/Items";

export default function IndexPage() {
  return (
    <>
      <div id="section1">
        <Hero />
      </div>
      <div id="section2" className="main-container">
        <Items />
      </div>
      <div id="section3">
        <Footer />
      </div>
    </>
  );
}

export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
