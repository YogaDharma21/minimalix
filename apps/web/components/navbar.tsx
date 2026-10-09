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
        "fixed top-6 left-4 z-50 w-fit transition-transform duration-300 md:left-6",
        hidden && "-translate-y-[calc(100%+1.5rem)]"
      )}
    >
      <div
        className={cn(
          "rounded-full border transition-colors",
          scrolled
            ? "bg-background/80 border-border backdrop-blur"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="flex h-14 items-center gap-5 px-5">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
