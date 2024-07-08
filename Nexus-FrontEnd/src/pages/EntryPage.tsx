import Services from "../components/Servicess/Services";
import ProjectIdea from "../components/ProjectIdea";
import PageFooter from "../components/PageFooter";
import Portofolio from "../components/Portofolio";
import OurStory from "../components/OurStory";
import Contact from "../components/Contact";

function EntryPage() {
  return (
    <div>
      <div className="h-[300px]">Provaaaa</div>
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

      <div>
        <Contact/>
      </div>

      
      <div>
        <PageFooter />
      </div>
    </div>
  );
}

export default EntryPage;
