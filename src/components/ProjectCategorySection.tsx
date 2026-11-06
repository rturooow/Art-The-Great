import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";
import ProjectPreview from "@/components/ProjectPreview";

type ProjectCategorySectionProps = {
  title: string;
  href: string;
  description: string;
  projects: PortfolioProject[];
};

export default function ProjectCategorySection({
  title,
  href,
  description,
  projects
}: ProjectCategorySectionProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <section className="project-category-section" aria-labelledby={headingId}>
      <div className="project-category-heading">
        <div>
          <h3 id={headingId}><Link href={href}>{title}</Link></h3>
          <p>{description}</p>
        </div>
        <Link className="project-category-link" href={href}>
          View all <span className="visually-hidden">{title.toLowerCase()}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14m0 0-7-7m7 7-7 7" />
          </svg>
        </Link>
      </div>
      {projects.length ? (
        <div
          className="project-rail"
          role="region"
          aria-label={`Featured ${title.toLowerCase()} projects`}
          tabIndex={0}
        >
          {projects.slice(0, 3).map((project) => (
            <ProjectPreview key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <p className="project-category-empty">No web applications published yet.</p>
      )}
    </section>
  );
}
