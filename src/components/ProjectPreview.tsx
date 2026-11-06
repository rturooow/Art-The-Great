import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";
import { siN8n, siResend, siSupabase } from "simple-icons";

const technologyIcons = { n8n: siN8n, Supabase: siSupabase, Resend: siResend };

export default function ProjectPreview({ project }: { project: PortfolioProject }) {
  return (
    <Link className="project-preview" href={project.href}>
      <span className="project-preview-copy">
        <span className="project-preview-title">{project.title}</span>
        <span className="project-preview-summary">{project.summary}</span>
      </span>
      <ul className="project-preview-details">
        {project.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
      <span className="project-preview-tools" role="group" aria-label="Tools used">
        {project.technologies.map((name) => {
          const technology = technologyIcons[name as keyof typeof technologyIcons];
          return technology ? (
            <span key={name} role="img" aria-label={name}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={technology.path} fill="currentColor" /></svg>
            </span>
          ) : null;
        })}
      </span>
    </Link>
  );
}
