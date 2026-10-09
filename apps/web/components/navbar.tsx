import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-fit max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border bg-background">
      <div className="flex h-14 items-center gap-5 px-5">
        <Logo />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
