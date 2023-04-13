import About from "./Pages/About";
import MainPage from "./Pages/MainPage";
import Projects from "./Pages/Projects";
import WorkExperience from "./Pages/WorkExperience";
import logo from "./logo.svg";
// import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div>
      <Parallax pages={5} className="flex flex-col gap-1 bg-bgColor">
        <ParallaxLayer offset={0} speed={0.3}>
          <MainPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <WorkExperience />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.3}>
          <Projects />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
