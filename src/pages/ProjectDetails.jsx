import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectSlug } = useParams();

  return (
    <main>
      <h1>Project Details</h1>
      <p>Project: {projectSlug}</p>
    </main>
  );
}

export default ProjectDetails;