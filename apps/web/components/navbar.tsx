import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 z-50 mx-auto h-16 max-w-[1000px] rounded-full border bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
