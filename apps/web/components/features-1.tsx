import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

export default function Features() {
  return (
    <section id="projects" className="bg-background pt-4 pb-24">
      <div className="mx-auto max-w-[1000px] space-y-4 px-6">
        {products.map((product) => (
          <article
            key={product.name}
            className="bg-card flex items-start gap-5 rounded-2xl border p-5 md:p-6"
          >
            <Image
              alt={`${product.name} app icon`}
              className="size-14 shrink-0 rounded-xl border object-cover"
              height={112}
              src={product.image}
              width={112}
            />
            <div className="min-w-0">
              <Link
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium hover:underline"
              >
                {product.name}
                <ArrowUpRight className="size-4" />
              </Link>
              <p className="text-muted-foreground mt-1 text-sm text-balance">
                {product.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {product.homepage && (
                  <Link
                    href={product.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 text-xs underline underline-offset-4"
                  >
                    Live site
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
