import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPageFooter from "@/components/ProjectPageFooter";
import ProjectPreview from "@/components/ProjectPreview";
import { automationProjects } from "@/data/projects";

export const metadata = {
  title: "Automations | ARTURO",
  description: "Workflow automation projects by Art Sumondong."
};

export default function AutomationsPage() {
  return (
    <>
      <ProjectHeader />
      <main className="page-shell portfolio-page">
        <div className="project-page-content">
          <nav className="project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#works">Works</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Automations</span>
          </nav>
          <section className="project-category-intro" aria-labelledby="category-title">
            <h1 id="category-title">Automations</h1>
            <p>Practical workflows that help teams capture requests and keep the next step visible.</p>
          </section>
          <div className="project-list project-card-grid" aria-label="Automation projects">
            {automationProjects.map((project) => (
              <ProjectPreview key={project.title} project={project} />
            ))}
          </div>
        </div>
        <ProjectPageFooter />
      </main>
    </>
  );
}
