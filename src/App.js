import About from "./Pages/About";
import MainPage from "./Pages/MainPage";
import Projects from "./Pages/Projects";
import WorkExperience from "./Pages/WorkExperience";
import logo from "./logo.svg";
import * as FiIcons from "react-icons/fi";
// import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div>
      <div className="fixed bottom-7 right-7 z-50">
        <button className=" p-3 bg-darkgray rounded-full text-white">
          <FiIcons.FiMail size={30} />
        </button>
      </div>
      <Parallax pages={5} className="flex flex-col gap-1 bg-bgColor">
        <ParallaxLayer offset={0} speed={0.3}>
          <MainPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <WorkExperience />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.4}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.2}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
