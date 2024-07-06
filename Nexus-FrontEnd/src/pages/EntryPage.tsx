

import Services from "../components/Servicess/Services";
import ProjectIdea from "../components/ProjectIdea";
import PageFooter  from "../components/PageFooter";


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
        <PageFooter/>
      </div>

    </div>
  );
}

export default EntryPage;
