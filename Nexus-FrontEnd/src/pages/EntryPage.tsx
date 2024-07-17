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

function EntryPage() {
  return (
    <div className="bg-white">
      {/* Duhet me ndryshu Logon  */}
      <div>
        <Header />
      </div>

      {/* DO ndryshohen komplet  */}
      <div className="">
        <Entry />
      </div>

      {/* DO ndryshohen komplet  */}
      <div>
        <DesignObject />
      </div>

      {/* Mund te ndryshohen fontet ose size i textit  */}
      <div>
        <AboutUs />
      </div>

      <br />
      <br />
      <br />
      {/* Mund te ndryshohen fontet ose size i textit  */}
      <div>
        <OurStory />
      </div>

      {/* Mund te ndryshohen fontet ose size i textit, ka nje icon nje prb nje rreth kot */}
      <div>
        <Services />
      </div>

      {/* Duet pare shkrimi me mire dhe responsivnes*/}
      <div className="h-[500px] flex items-center justify-center text-center">
        <ProjectIdea />
      </div>

      {/* duhet te behet me buttona to scroll anash*/}
      <div>
        <Portofolio />
      </div>

      {/*It has a problem with gmail -> text is long for 320px and lower */}
      {/* Mund te behen remove borders where is not focus,  duhet te ndryshohet buttoni hover  */}
      <div className="bg-white">
        <Contact />
      </div>

      {/* Ka shume info */}
      <div>
        <PageFooter />
      </div>
    </div>
  );
}

export default EntryPage;
