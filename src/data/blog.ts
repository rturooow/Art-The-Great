export type BlogCategory = "Project story" | "Build note";

export type BlogContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  summary: string;
  body: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [];
