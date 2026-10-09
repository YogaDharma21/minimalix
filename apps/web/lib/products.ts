export interface ProductEntry {
  name: string;
  description: string;
  tags: string[];
  href: string;
  homepage?: string;
  image: string;
}

const preview = (repo: string) =>
  `https://opengraph.githubassets.com/1/YogaDharma21/${repo}`;

export const products: ProductEntry[] = [
  {
    name: "Focus",
    description:
      "A modern, minimalist productivity app to help you stay in the flow while working, studying, or relaxing.",
    tags: ["TypeScript", "Productivity"],
    href: "https://github.com/YogaDharma21/focus",
    homepage: "https://focustrackers.my.id",
    image: preview("focus"),
  },
  {
    name: "SubKeep",
    description:
      "A sleek subscription tracker to manage recurring expenses, billing cycles, and monthly spending analytics in one clean dashboard.",
    tags: ["Next.js", "Convex", "Clerk"],
    href: "https://github.com/YogaDharma21/subkeep",
    homepage: "https://subkeeps.my.id/",
    image: preview("subkeep"),
  },
  {
    name: "PocketCheck",
    description:
      "A web app to create and manage custom routines and checklist items, with progress tracking and a responsive dashboard.",
    tags: ["React", "Convex", "Clerk"],
    href: "https://github.com/YogaDharma21/pocket-check",
    homepage: "https://www.pocketchecker.my.id/",
    image: preview("pocket-check"),
  },
];
