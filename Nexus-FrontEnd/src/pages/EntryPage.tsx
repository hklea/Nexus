import Services from "../components/Servicess/Services";
import ProjectIdea from "../components/ProjectIdea";
import PageFooter from "../components/PageFooter";
import Portofolio from "../components/Portofolio";
import OurStory from "../components/OurStory";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header";

function EntryPage() {
  return (
    <div className="bg-white">
      <div>
        <Header/>
      </div>
      <div className="h-[500px] bg-[#9BB5C8]">

      </div>
      <div>
        <AboutUs/>
      </div>
      <br />
      <br />
      <br />
      <div>
        <OurStory />
      </div>
      <div>
        <Services />
      </div>

      <div className="h-[500px] flex items-center justify-center text-center">
        <ProjectIdea />
      </div>
      <div>
        <Portofolio />
      </div>

      <div className="bg-white"><Contact/></div>


      {/* <div><Contact/></div> */}

      <div>
        <PageFooter />
      </div>
    </div>
  );
}

export default EntryPage;
