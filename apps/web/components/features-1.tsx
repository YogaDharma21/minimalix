import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { products, type ProductEntry } from "@/lib/products";

function ProjectText({
  product,
  align,
}: {
  product: ProductEntry;
  align: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center p-8 md:p-10",
        align === "center" && "items-center text-center"
      )}
    >
      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
        {product.name}
      </h3>
      <p className="text-muted-foreground mt-3 max-w-md text-balance">
        {product.description}
      </p>
      <div
        className={cn(
          "mt-5 flex flex-wrap gap-2",
          align === "center" && "justify-center"
        )}
      >
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={cn(
          "mt-6 flex flex-wrap items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <Button asChild variant="outline" className="rounded-full">
          <Link href={product.href} target="_blank" rel="noreferrer">
            View on GitHub
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        {product.homepage && (
          <Link
            href={product.homepage}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4"
          >
            Visit live site
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div>
          <h2 className="text-balance text-4xl font-medium">Projects</h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Three small tools, built to stay out of the way.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {products.map((product, i) =>
            i === 1 ? (
              <article
                key={product.name}
                className="bg-card overflow-hidden rounded-3xl border"
              >
                <ProjectText product={product} align="center" />
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                  <Image
                    alt={`${product.name} repository preview`}
                    className="h-auto w-full rounded-2xl border object-cover"
                    height={630}
                    src={product.image}
                    width={1200}
                  />
                </div>
              </article>
            ) : (
              <article
                key={product.name}
                className="bg-card grid overflow-hidden rounded-3xl border md:grid-cols-2"
              >
                <ProjectText
                  product={product}
                  align="left"
                />
                <div className={cn("relative min-h-64", i === 2 && "md:order-first")}>
                  <Image
                    alt={`${product.name} repository preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    src={product.image}
                  />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
