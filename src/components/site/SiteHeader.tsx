import { Link } from "@tanstack/react-router";
import { Atom, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "دوره‌ها", to: "/soon" as const },
  { label: "لقمه‌ها", to: "/soon" as const },
  { label: "آموزش رایگان", to: "/soon" as const },
  { label: "کلاس‌ها", to: "/soon" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Atom className="size-5" />
          </span>
          <span className="font-display text-xl text-primary">فیزیک با زینلی</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/#about"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            درباره‌ی من
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ink" size="sm" className="hidden rounded-full px-4 sm:inline-flex">
            <Link to="/soon">ورود / ثبت‌نام</Link>
          </Button>
          <button
            type="button"
            aria-label="منو"
            className="grid size-9 place-items-center rounded-full hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"
            >
              {n.label}
            </Link>
          ))}
          <a href="/#about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm hover:bg-secondary">
            درباره‌ی من
          </a>
          <Link to="/soon" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-bold text-primary hover:bg-secondary">
            ورود / ثبت‌نام
          </Link>
        </nav>
      )}
    </header>
  );
}
