import type { LucideIcon } from "lucide-react";
import { Boxes, Layers, Package, Puzzle, Sparkles, Zap } from "lucide-react";

export interface ProductEntry {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const products: ProductEntry[] = [
  {
    name: "Starter Kit",
    description: "Minimal setup to launch a landing page in minutes.",
    icon: Package,
    href: "#",
  },
  {
    name: "UI Blocks",
    description: "Copy-ready sections for hero, features and footer.",
    icon: Layers,
    href: "#",
  },
  {
    name: "Theme Preset",
    description: "Neutral colors with dark mode and Work Sans.",
    icon: Sparkles,
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect tools and services with a few clicks.",
    icon: Puzzle,
    href: "#",
  },
  {
    name: "Components",
    description: "Accessible primitives built on shadcn and Radix.",
    icon: Boxes,
    href: "#",
  },
  {
    name: "Fast Builds",
    description: "Tuned defaults for quick iteration and deploy.",
    icon: Zap,
    href: "#",
  },
];
