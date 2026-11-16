import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

const social = [
  { icon: GithubIcon, href: "https://github.com/yogaDharma21/", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ida-bagus-yoga-dharma-putra/",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/yogadharmaputra_/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2" aria-label="Minimalix home">
            <Logo />
          </Link>
          <div className="mt-8 flex gap-4">
            {social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center rounded-full transition-colors"
                aria-label={item.label}
              >
                <item.icon className="size-4" />
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-sm">
            &copy; {2026} Minimalix.
          </p>
        </div>
      </div>
    </footer>
  );
}
