import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen items-center justify-between px-6 py-12 bg-black">
      {/* Left Text Section */}
      <div className="ml-20 w-full md:w-3/2 text-left mb-12 md:mb-0">
        <h1 className="text-6xl font-bold leading-tight text-white">
          Hii! I am Chitra Jain
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white">
          A passionate student trying to figure out life
          <br />
          I am a potterhead forever 
        </p>
        <Link
          to="/register"
          className="explore-btn mt-6 inline-block rounded px-8 py-3 text-white"
        >
          Get To Know Me
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-3/2 flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300 animate-float">
          <img 
            src="src/assets/WhatsApp Image 2024-05-16 at 23.37.04.jpeg"
            alt="Chitra Jain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 animate-sparkle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
