"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let last = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > last && y > 120);
      last = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        hidden && "-translate-y-full"
      )}
    >
      <div
        className={cn(
          "border-b transition-colors",
          scrolled
            ? "bg-background/80 border-border backdrop-blur"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1000px] items-center justify-between px-6">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
