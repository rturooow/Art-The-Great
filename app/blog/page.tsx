import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPageFooter from "@/components/ProjectPageFooter";
import { blogPosts, type BlogCategory } from "@/data/blog";
import { profile } from "@/data/profile";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "Blog | ARTURO",
  description: "Project stories, build notes, and work history from Art Sumondong."
};

const writingSections: { title: string; category: BlogCategory; id: string }[] = [
  { title: "Project Stories", category: "Project story", id: "project-stories" },
  { title: "Build Notes", category: "Build note", id: "build-notes" }
];

function formatDate(date: string) {
  return new Date(`${date}-01T00:00:00`).toLocaleDateString("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });
}

export default function BlogPage() {
  return (
    <>
      <ProjectHeader />
      <main className="page-shell portfolio-page">
        <div className="project-page-content">
          <section className="project-category-intro" aria-labelledby="blog-title">
            <h1 id="blog-title">Blog</h1>
            <p>Project stories, build notes, and a record of my work.</p>
          </section>
          <section className="blog-writing-grid" aria-label="Writing">
            {writingSections.map((section) => {
              const posts = blogPosts.filter((post) => post.category === section.category);

              return (
                <section className="blog-writing-section" aria-labelledby={`${section.id}-heading`} key={section.id}>
                  <h2 id={`${section.id}-heading`}>{section.title}</h2>
                  {posts.length ? (
                    <ul className="blog-post-list">
                      {posts.map((post) => (
                        <li className="blog-post-preview" key={post.slug}>
                          <Link className="blog-post-link" href={`/blog/${post.slug}`}>
                            <span className="blog-post-date">
                              <time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                timeZone: "UTC"
                              })}</time>
                            </span>
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="blog-empty-state">Writing in progress.</p>
                  )}
                </section>
              );
            })}
          </section>
          <section className="experience-section" id="experience" aria-labelledby="experience-heading">
            <div className="section-heading">
              <h2 id="experience-heading">Places I&apos;ve made my mark</h2>
            </div>
            <ol className="experience-list">
              {profile.experience.map((item) => (
                <li
                  className="experience-item"
                  data-current={item.endDate === "Present"}
                  key={`${item.organization}-${item.startDate}`}
                >
                  <p className="experience-dates">
                    <time dateTime={item.startDate}>{formatDate(item.startDate)}</time>
                    {" – "}
                    {item.endDate === "Present" ? (
                      <span>Present</span>
                    ) : (
                      <time dateTime={item.endDate}>{formatDate(item.endDate)}</time>
                    )}
                  </p>
                  <span className="experience-marker" aria-hidden="true" />
                  <span className="experience-logo-frame">
                    <Image
                      className="experience-logo"
                      src={`${publicBasePath}${item.logo.src}`}
                      alt={item.logo.alt}
                      width={64}
                      height={64}
                    />
                  </span>
                  <div className="experience-details">
                    <h3>{item.role}</h3>
                    <p className="experience-organization">{item.organization}</p>
                    <p className="experience-location">{item.location}</p>
                    {item.highlights ? (
                      <ul className="experience-highlights">
                        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <ProjectPageFooter />
      </main>
    </>
  );
}
