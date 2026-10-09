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
      <section id="about" className="bg-background py-12">
        <div className="mx-auto max-w-[1000px] px-6">
          <p className="text-muted-foreground text-sm">
            Minimalix keeps the page small. One hero, one product list, standard
            chrome.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
