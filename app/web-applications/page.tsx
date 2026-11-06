import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPageFooter from "@/components/ProjectPageFooter";
import ProjectPreview from "@/components/ProjectPreview";
import { webApplicationProjects } from "@/data/projects";

export const metadata = {
  title: "Web Applications | ARTURO",
  description: "Web application projects by Art Sumondong."
};

export default function WebApplicationsPage() {
  return (
    <>
      <ProjectHeader />
      <main className="page-shell portfolio-page">
        <div className="project-page-content">
          <nav className="project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#works">Works</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Web applications</span>
          </nav>
          <section className="project-category-intro" aria-labelledby="category-title">
            <h1 id="category-title">Web applications</h1>
            <p>Useful products and interfaces built to make everyday work clearer.</p>
          </section>
          {webApplicationProjects.length ? (
            <div className="project-list project-card-grid" aria-label="Web application projects">
              {webApplicationProjects.map((project) => (
                <ProjectPreview key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <p className="project-empty-state">No web applications published yet.</p>
          )}
        </div>
        <ProjectPageFooter />
      </main>
    </>
  );
}
