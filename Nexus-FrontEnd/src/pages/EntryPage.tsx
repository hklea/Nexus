import Services from "../components/Servicess/Services";
import ProjectIdea from "../components/ProjectIdea";
import PageFooter from "../components/PageFooter";
import Portofolio from "../components/Portofolio";
import OurStory from "../components/OurStory";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header";
import Entry from "../components/Entry";
import DesignObject from "../components/DesignObject";
import Transition from "../components/Common/Transition";
import wp from "../assets/Icons/EntryPage/wp.png";
import { handleWhatsAppClick } from "../utilities/EntryPage/CallingSocial";

function EntryPage() {
  return (
    <div className="bg-white relative">
      <div id="home">
        <Header />
      </div>

      <div>
        <Entry />
      </div>

      <Transition>
        <div id="design">
          <DesignObject />
        </div>
      </Transition>

      <Transition>
        <div id="about">
          <AboutUs />
        </div>
      </Transition>

      <Transition>
        <div id="our-story">
          <OurStory />
        </div>
      </Transition>

      <Transition>
        <div id="services">
          <Services />
        </div>
      </Transition>

      <Transition>
        <div
          id="project-idea"
          className="h-[500px] flex items-center justify-center text-center"
        >
          <ProjectIdea />
        </div>
      </Transition>

      <Transition>
        <div id="portfolio">
          <Portofolio />
        </div>
      </Transition>

      <Transition>
        <div id="contact" className="bg-white">
          <Contact />
        </div>
      </Transition>

      <div>
        <PageFooter />
      </div>

      <div
        className="fixed bottom-0 right-0 mb-4 mr-4 cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <img src={wp} alt="" className="h-16" />
      </div>
    </div>
  );
}

export default EntryPage;
