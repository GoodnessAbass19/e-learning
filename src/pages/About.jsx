import Hero from "../page features/about/Hero";
import Collaboration from "../page features/about/Collaboration";
import SamePage from "../page features/about/SamePage";
import Streamlined from "../page features/about/StreamLined";
import Features from "../page features/about/Features";
import Title from "../page features/about/mobile-view/Title";
import Testing from "../page features/about/Testing";

const About = () => {
  return (
    <div className="bg-black">
      <div className="xl:block hidden mx-auto">
        <Hero />
        <Collaboration />
        <SamePage />
        <Streamlined />
        <Features />
        <Testing />
      </div>

      <div className="xl:hidden block text-[55.5%]">
        <Title />
      </div>
      
    </div>
  );
};

export default About;
