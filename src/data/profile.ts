type NavItem = {
  label: string;
  href: string;
};

type ExperienceItem = {
  role: string;
  organization: string;
  logo: {
    src: string;
    alt: string;
  };
  startDate: string;
  endDate: string;
  location: string;
  highlights?: string[];
};

type ContactItem = {
  type: "email" | "github" | "linkedin" | "instagram";
  label: string;
  value: string;
  href: string;
};

type Profile = {
  name: string;
  role: string;
  navItems: NavItem[];
  technologies: string[];
  intro: {
    title: string;
    description: string;
  };
  portrait: {
    src: string;
    alt: string;
  };
  experience: ExperienceItem[];
  contacts: ContactItem[];
};

export const profile: Profile = {
  name: "ARTURO",
  role: "Fullstack Engineer",
  navItems: [
    { label: "Works", href: "#works" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  technologies: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "C++",
    "GitHub",
    "GitHub Actions",
    "Docker Desktop",
    "VS Code",
    "OpenAI"
  ],
  intro: {
    title: "Hi! I'm Art Sumondong.",
    description:
      "I build simple and useful digital work. This space shares who I am, what I do, and a few projects I care about."
  },
  portrait: {
    src: "/profile-pic.jpg",
    alt: "Portrait placeholder for Arturo"
  },
  experience: [
    {
      role: "Research Assistant",
      organization: "Mindanao State University - Iligan Institute of Technology",
      logo: {
        src: "/msu-iit-logo.png",
        alt: "MSU-IIT seal"
      },
      startDate: "2026-07",
      endDate: "Present",
      location: "Iligan City, Northern Mindanao, Philippines"
    },
    {
      role: "Backend Developer Intern",
      organization: "meldCX",
      logo: {
        src: "/meldcx-logo.png",
        alt: "meldCX logo"
      },
      startDate: "2026-01",
      endDate: "2026-05",
      location: "Cagayan de Oro City, Northern Mindanao, Philippines",
      highlights: [
        "Assisted in building and improving user interface and user experience.",
        "Worked on server-side logic, primarily API integration.",
        "Debugged issues reported by QA and reviewed pull requests."
      ]
    }
  ],
  contacts: [
    {
      type: "email",
      label: "Email",
      value: "artsumondong7@gmail.com",
      href: "mailto:artsumondong7@gmail.com"
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/gattosazio",
      href: "https://github.com/gattosazio"
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/art-sumondong-83419640b/",
      href: "https://www.linkedin.com/in/art-sumondong-83419640b/"
    },
    {
      type: "instagram",
      label: "Instagram",
      value: "instagram.com/rt_kenttt/",
      href: "https://www.instagram.com/rt_kenttt/"
    }
  ]
};
