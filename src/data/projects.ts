export type PortfolioProject = {
  title: string;
  summary: string;
  href: string;
  details: string[];
  technologies: string[];
};

export const inquiryFlowProject: PortfolioProject = {
  title: "InquiryFlow",
  summary: "Turn new project requests into clear, trackable follow-up.",
  href: "/automations/inquiryflow",
  details: [
    "Checks repeat submissions before saving a new inquiry.",
    "Tracks requests as new, contacted, or closed.",
    "Queues owner alerts, eligible 24-hour reminders, and weekly summaries."
  ],
  technologies: ["n8n", "Supabase", "Resend"]
};

export const automationProjects = [inquiryFlowProject];
export const webApplicationProjects: PortfolioProject[] = [];
