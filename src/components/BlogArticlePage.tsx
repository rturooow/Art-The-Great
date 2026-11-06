import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPageFooter from "@/components/ProjectPageFooter";
import type { BlogPost } from "@/data/blog";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export default function BlogArticlePage({ post }: { post: BlogPost }) {
  return (
    <>
      <ProjectHeader />
      <main className="page-shell portfolio-page">
        <article className="project-page-content blog-article-content">
          <nav className="project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <header className="blog-article-heading">
            <div className="blog-article-meta">
              <span>{post.category}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-article-summary">{post.summary}</p>
          </header>
          <div className="blog-article-body">
            {post.body.map((block, index) =>
              block.type === "heading" ? (
                <h2 key={`${block.type}-${index}`}>{block.text}</h2>
              ) : (
                <p key={`${block.type}-${index}`}>{block.text}</p>
              )
            )}
          </div>
          <Link className="blog-back-link" href="/blog">Back to Blog</Link>
        </article>
        <ProjectPageFooter />
      </main>
    </>
  );
}
