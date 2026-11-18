import { createFileRoute, Link } from "@tanstack/react-router";
import { Atom, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/soon")({
  head: () => ({
    meta: [
      { title: "به‌زودی | فیزیک با سعید زینلی" },
      { name: "description", content: "دوره‌ها، لقمه‌ها و آموزش‌های رایگان فیزیک سعید زینلی به‌زودی منتشر می‌شوند." },
      { property: "og:title", content: "به‌زودی | فیزیک با سعید زینلی" },
      { property: "og:description", content: "دوره‌ها، لقمه‌ها و آموزش‌های رایگان فیزیک به‌زودی منتشر می‌شوند." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SoonPage,
});

function SoonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="bg-grid flex flex-1 items-center justify-center px-5 py-24">
        <div className="max-w-lg text-center">
          <div className="relative mx-auto grid size-28 place-items-center">
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-orbit" />
            <span className="absolute inset-3 rounded-full border border-accent/60 animate-orbit-reverse" />
            <Atom className="size-12 text-primary" />
          </div>
          <h1 className="mt-8 text-5xl text-primary">به‌زودی!</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            این بخش در حال آماده شدن است. دوره‌ها، لقمه‌ها و آموزش‌های رایگان خیلی زود همین‌جا منتشر می‌شوند.
          </p>
          <Button asChild variant="ink" size="xl" className="mt-8">
            <Link to="/">
              <ArrowRight />
              بازگشت به صفحه‌ی اصلی
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
