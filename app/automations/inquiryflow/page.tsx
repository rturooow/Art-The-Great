import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPageFooter from "@/components/ProjectPageFooter";
import ProjectWorkflow from "@/components/ProjectWorkflow";
import { siN8n, siResend, siSupabase } from "simple-icons";

export const metadata = {
  title: "InquiryFlow | ARTURO",
  description: "An agency inquiry workflow that keeps new project requests moving."
};

const clientBenefits = [
  {
    title: "A faster first response",
    description: "A clear owner alert helps an agency spot a new request and decide what to do next."
  },
  {
    title: "One place for the details",
    description: "Requests and status changes are saved together, so the team can see whether an inquiry is new, contacted, or closed."
  },
  {
    title: "Follow-up that stays visible",
    description: "Eligible open inquiries can be reminded after 24 hours, with a weekly summary to review the pipeline."
  }
];

export default function InquiryFlowPage() {
  return (
    <>
      <ProjectHeader />
      <main className="page-shell portfolio-page portfolio-light-page">
        <div className="project-page-content project-detail-content">
          <nav className="project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#works">Works</Link>
            <span aria-hidden="true">/</span>
            <Link href="/automations">Automations</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">InquiryFlow</span>
          </nav>
          <section className="project-detail-hero" aria-labelledby="project-title">
            <div className="project-detail-lead">
              <h1 id="project-title">InquiryFlow</h1>
              <p className="project-detail-summary">
                Turn new project requests into clear, trackable follow-up. InquiryFlow gives a small agency a path from first inquiry to owner response, with reminders for work that still needs attention.
              </p>
              <div className="project-detail-actions">
                <a className="button button-solid" href="https://github.com/rturooow/inquiry-workflow" target="_blank" rel="noreferrer">
                  View source
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </div>
            <ProjectWorkflow />
          </section>

          <section className="project-story-section" aria-labelledby="client-value-title">
            <div className="project-story-intro">
              <h2 id="client-value-title">Help good inquiries get a timely reply.</h2>
              <p>
                When requests arrive across a busy day, manual handoffs can make follow-up harder to track. InquiryFlow turns each submission into a saved record and a visible next step, giving an agency a steadier way to respond while a potential client is still engaged.
              </p>
            </div>
            <ul className="project-benefit-list">
              {clientBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="project-story-section project-build-section" aria-labelledby="build-title">
            <div className="project-story-intro">
              <h2 id="build-title">Built for a dependable handoff.</h2>
              <p>
                InquiryFlow connects an n8n form and scheduled workflows to Supabase. New records and email jobs are queued together, then a worker sends owner notifications through Resend. A staff form records contacted or closed status so reminders can follow the current state.
              </p>
            </div>
            <div className="project-technology-list" role="group" aria-label="Tools used">
              {[siN8n, siSupabase, siResend].map((technology) => (
                <span key={technology.title} title={technology.title} role="img" aria-label={technology.title}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={technology.path} fill="currentColor" /></svg>
                  <span>{technology.title}</span>
                </span>
              ))}
            </div>
          </section>
        </div>
        <ProjectPageFooter />
      </main>
    </>
  );
}
