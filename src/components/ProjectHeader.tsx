import Image from "next/image";
import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProjectHeader() {
  return (
    <div className="site-header-shell">
      <header className="site-header">
        <Link className="brand" href="/#home" aria-label="ARTURO home">
          <Image
            src={`${publicBasePath}/arturo_logo-2.png`}
            alt="ARTURO"
            width={2000}
            height={2000}
            className="brand-logo"
            priority
          />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link className="nav-link" href="/#works">Works</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link nav-link-contact" href="/#contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
}
