import { Link } from "@tanstack/react-router";
import { Atom } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-chalkboard">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Atom className="size-6 text-accent" />
            <span className="font-display text-2xl">فیزیک با زینلی</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-7 text-board-muted">
            آموزش مفهومی فیزیک دبیرستان، از پایه‌ی دهم تا دوازدهم و کنکور.
          </p>
        </div>
        <div>
          <h3 className="text-lg">دسترسی سریع</h3>
          <ul className="mt-3 space-y-2 text-sm text-board-muted">
            <li><Link to="/soon" className="hover:text-accent">دوره‌های مفهومی</Link></li>
            <li><Link to="/soon" className="hover:text-accent">دوره‌های پیشرفته</Link></li>
            <li><Link to="/soon" className="hover:text-accent">لقمه‌ها</Link></li>
            <li><Link to="/soon" className="hover:text-accent">آموزش‌های رایگان</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg">ارتباط با ما</h3>
          <p className="mt-3 text-sm leading-7 text-board-muted">
            راه‌های ارتباطی به‌زودی اینجا قرار می‌گیرد.
          </p>
        </div>
      </div>
      <div className="border-t border-board-foreground/10 py-5 text-center text-xs text-board-muted">
        © تمامی حقوق برای سعید زینلی محفوظ است.
      </div>
    </footer>
  );
}
