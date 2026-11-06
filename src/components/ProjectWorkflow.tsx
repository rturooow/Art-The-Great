"use client";

import { useEffect, useRef, useState } from "react";

const workflowSteps = [
  { title: "Capture", description: "A customer submits a project request through the n8n intake form." },
  { title: "Organize", description: "The workflow validates the request and saves its status in Supabase." },
  { title: "Notify", description: "A queued email alerts the agency owner about the new inquiry." },
  { title: "Follow up", description: "A scheduler queues reminders and a weekly summary; staff can record when they have contacted a lead." }
];

export default function ProjectWorkflow() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    let visible = !("IntersectionObserver" in window);
    const updateAnimation = () => setStarted(visible && !document.hidden);
    document.addEventListener("visibilitychange", updateAnimation);
    updateAnimation();

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          updateAnimation();
        }, { threshold: 0.2 })
      : null;
    observer?.observe(panel);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updateAnimation);
    };
  }, []);

  return (
    <div ref={panelRef} className={`project-flow-panel${started ? " project-flow-active" : ""}`} aria-label="InquiryFlow process">
      <p className="project-flow-heading">From request to follow-up</p>
      <ol className="project-flow-steps">
        {workflowSteps.map((step, index) => (
          <li key={step.title}>
            <span className="project-flow-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
