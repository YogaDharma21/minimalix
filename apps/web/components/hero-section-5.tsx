import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="overflow-hidden">
      <section className="bg-background">
        <div className="relative pt-36 pb-16">
          <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6">
            <div className="mask-radial-from-35% aspect-3/2 mask-radial-to-75% pointer-events-none relative mx-auto max-w-xl opacity-75 mix-blend-darken">
              <div className="bg-background absolute inset-0 mix-blend-overlay" />
              <Image
                alt="Minimalix product preview"
                className="not-dark:invert dark:mix-blend-lighten"
                height={560}
                src="https://images.unsplash.com/photo-1634595947394-87012e7b12ba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1340}
              />
            </div>
            <div className="mx-auto mt-6 max-w-md text-center">
              <h1 className="text-balance text-4xl font-medium sm:text-5xl">
                Minimalix
              </h1>
              <p className="text-muted-foreground mt-4 text-balance">
                Less But Better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
