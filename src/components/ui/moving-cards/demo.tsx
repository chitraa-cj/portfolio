import { FaPython, FaJava, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTypescript, SiNumpy, SiPandas, SiMongodb, SiNextdotjs, SiPrisma, SiScikitlearn, SiPytorch, SiTailwindcss } from "react-icons/si";
import "./movingtech.scss";

const technologies = [
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PyTorch", icon: <SiPytorch /> }, // Added PyTorch // Added Matplotlib
  { name: "Tailwind CSS", icon: <SiTailwindcss /> } // Added Tailwind CSS
];

const MovingTechnologies = () => {
  return (
    <div className="moving-technologies">
      <div className="marquee">
        <div className="track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="tech-card">
              <span className="tech-icon">{tech.icon}</span>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingTechnologies;
