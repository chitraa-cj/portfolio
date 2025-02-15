import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.scss";
import { BentoGridThirdDemo } from "../../components/ui/bento/demo";
import { HeroScrollDemo } from "../../components/ui/container-scroll/demo";
const Home: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(".home-container");

    if (!container) return;

    let currentColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // Start with a random color
    let colorInterval: NodeJS.Timeout;

    const updateColor = () => {
      currentColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    };

    // Change the brush color every 2 seconds
    colorInterval = setInterval(updateColor, 2000);

    const handleMouseMove = (event: MouseEvent) => {
      // Create the brush element
      const line = document.createElement("div");
      line.className = "mouse-line";

      // Set position and color
      line.style.left = `${event.clientX}px`;
      line.style.top = `${event.clientY}px`;
      line.style.background = currentColor;

      // Append to the container
      container.appendChild(line);

      // Remove after 1 second
      setTimeout(() => {
        line.remove();
      }, 1000);
    };

    // Add mousemove event listener with proper type assertion
    const handleMouseMoveWrapper = (e: Event) => handleMouseMove(e as MouseEvent);

    container.addEventListener("mousemove", handleMouseMoveWrapper);

    return () => {
      container.removeEventListener("mousemove", handleMouseMoveWrapper);
      clearInterval(colorInterval); // Clear the interval on cleanup
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <main className="font-sans">
          <div className="relative">
            <section className="relative flex flex-col md:flex-row min-h-screen items-center justify-between px-6 py-12 bg-black">
              {/* Left Text Section */}
              <div className="w-full md:w-3/2 text-left mb-12 md:mb-0">
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
                    src="src/assets/WhatsApp Image 2024-05-16 at 23.37.04.jpeg" // Replace with your image path
                    alt="Chitra Jain"
                    className="w-full h-full object-cover"
                  />
                  {/* Optional sparkle effect */}
                  <div className="absolute inset-0 animate-sparkle"></div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <section className="min-h-screen flex flex-col items-start pl-6 mt-12">
        <BentoGridThirdDemo />
      </section>
      <section>
      <HeroScrollDemo/>
      </section>

      </div>
    </div>
  );
};

export default Home;
