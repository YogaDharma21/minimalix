import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section-5";
import Features from "@/components/features-1";
import Footer from "@/components/footer-2";

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-svh">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}
