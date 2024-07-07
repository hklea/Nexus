

import Services from "../components/Servicess/Services";
import ProjectIdea from "../components/ProjectIdea";
import PageFooter  from "../components/PageFooter";
import Portofolio from "../components/Portofolio";


function EntryPage() {
  return (
    <div>
<div className="h-[300px]">
  Provaaaa
</div>

      <div>
        <Services/>
      </div>

      <div className="h-[500px] flex items-center justify-center text-center">
        <ProjectIdea />
      </div>
      <div>
        <Portofolio />
      </div>
<br /><br /><br />
      <div>
        Era
      </div>

      <br /><br /><br />
      <div>
        <PageFooter/>
      </div>

    </div>
  );
}

export default EntryPage;
