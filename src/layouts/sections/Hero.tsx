import defaultSettings from "@/data/general";
import { scrollToSection } from "@/pages/index";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={defaultSettings.hero.image}
        alt="Delicious food"
        className="w-full h-auto object-cover object-center"
        style={{ maxHeight: "75vh" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-5xl font-bold text-white md:text-5xl sm:text-xl">
          {defaultSettings.hero.title}
        </h1>
        <p className="text-sm text-white max-w-md sm:text-xl">
          {defaultSettings.hero.subtitle}
        </p>
        <button
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
          onClick={() => scrollToSection("section2")}
        >
          {defaultSettings.hero.exploreButton}
        </button>
      </div>
    </section>
  );
};

export default Hero;
