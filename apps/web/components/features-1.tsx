import Link from "next/link";
import { Card } from "@workspace/ui/components/card";
import { products } from "@/lib/products";

export default function Features() {
  return (
    <section id="features" className="bg-background @container py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div>
          <h2 className="text-balance text-4xl font-medium">
            Products for focused teams
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Six entries. Each one small, clear and ready to use.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} variant="outline" className="p-6">
              <div className="space-y-2">
                <product.icon className="size-5" />
                <h3 className="text-foreground font-medium">{product.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
                <Link
                  className="text-sm underline underline-offset-4"
                  href={product.href}
                >
                  Learn more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
