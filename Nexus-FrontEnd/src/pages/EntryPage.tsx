import Services from "../components/Services";
import ProjectIdea from "../components/ProjectIdea";

function EntryPage() {
  return (
    <div>
      <Services />
      <div className="h-[500px] flex items-center justify-center text-center">
        <ProjectIdea />
      </div>
    </div>
  );
}

export default EntryPage;
