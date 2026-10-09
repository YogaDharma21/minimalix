export interface ProductEntry {
  name: string;
  description: string;
  tags: string[];
  href: string;
  homepage?: string;
  image: string;
}

export const products: ProductEntry[] = [
  {
    name: "Focus",
    description: "A minimalist productivity app to stay in the flow.",
    tags: ["Productivity"],
    href: "https://github.com/YogaDharma21/focus",
    homepage: "https://focustrackers.my.id",
    image: "/projects/focus.png",
  },
  {
    name: "SubKeep",
    description: "Track subscriptions, billing cycles, and monthly spending.",
    tags: ["Finance"],
    href: "https://github.com/YogaDharma21/subkeep",
    homepage: "https://subkeeps.my.id/",
    image: "/projects/subkeep.png",
  },
  {
    name: "PocketCheck",
    description: "Routines and checklists with progress tracking.",
    tags: ["Routines"],
    href: "https://github.com/YogaDharma21/pocket-check",
    homepage: "https://www.pocketchecker.my.id/",
    image: "/projects/pocket-check.png",
  },
];
