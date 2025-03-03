import "./Home.scss";
import HeroSection from "../../components/ui/hero";
import MovingTechnologies from "../../components/ui/moving-cards/demo";
import { BentoGridThirdDemo } from "../../components/ui/bento/demo";
import { HeroScrollDemo } from "../../components/ui/container-scroll/demo";
import { FlipWordsDemo } from "../../components/ui/flip/demo";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <MovingTechnologies />

      <div className="content-section">
        <div className="content-section flex justify-between my-20">
          <div className="ml-10"><FlipWordsDemo /></div>
          <div className="mr-10"><BentoGridThirdDemo /></div>
        </div>


      </div>
    </div>
  );
};

export default Home;
