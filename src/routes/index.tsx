import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpenCheck,
  Gift,
  GraduationCap,
  MapPin,
  Rocket,
  Sandwich,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ComingSoonBadge } from "@/components/site/ComingSoonBadge";
// The photo lives in public/ as a real file so the site also works when it is
// built and hosted outside Lovable (e.g. from the connected GitHub repo).
const PORTRAIT = "/saeed-zeinali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سعید زینلی | دبیر فیزیک دبیرستان" },
      {
        name: "description",
        content: "آموزش مفهومی فیزیک دبیرستان با سعید زینلی؛ فیزیک دهم، یازدهم و دوازدهم، کلاس‌های آنلاین و حضوری.",
      },
      { property: "og:title", content: "سعید زینلی | دبیر فیزیک دبیرستان" },
      {
        property: "og:description",
        content: "فیزیک رو بفهم، نه حفظ کن! آموزش مفهومی فیزیک دهم تا دوازدهم با سعید زینلی.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GRADES = [
  {
    num: "۱۰",
    name: "دهم",
    book: "فیزیک ۱",
    topics: ["فیزیک و اندازه‌گیری", "ویژگی‌های ماده", "کار، انرژی و توان", "دما و گرما"],
    cta: "دهمی هستم!",
  },
  {
    num: "۱۱",
    name: "یازدهم",
    book: "فیزیک ۲",
    topics: ["الکتریسیته‌ی ساکن", "جریان و مدارها", "مغناطیس", "القای الکترومغناطیسی"],
    cta: "یازدهمی هستم!",
  },
  {
    num: "۱۲",
    name: "دوازدهم",
    book: "فیزیک ۳",
    topics: ["حرکت بر خط راست", "دینامیک", "نوسان و موج", "فیزیک اتمی و هسته‌ای"],
    cta: "دوازدهمی هستم!",
  },
];

const COURSES = [
  {
    icon: BookOpenCheck,
    title: "دوره‌های مفهومی",
    text: "برای دانش‌آموزانی که می‌خواهند همه‌ی مباحث از پایه، ساده و کاملاً مفهومی توضیح داده شود؛ همراه با حل تمرین‌های کتاب و مرور پیش‌نیازها.",
    cta: "از اینجا شروع کنید",
  },
  {
    icon: Rocket,
    title: "دوره‌های پیشرفته",
    text: "برای مسیر کنکور و دانش‌آموزان سطح بالا: همه‌ی مطالب دوره‌ی مفهومی به‌علاوه‌ی نکته‌های حرفه‌ای، تست‌های کنکور و روش‌های سریع حل مسئله.",
    cta: "از اینجا شروع کنید",
  },
  {
    icon: Sandwich,
    title: "لقمه‌ها",
    text: "در یک مبحث خاص ضعیف هستید؟ هر مبحث، فشرده و از صفر تا صد، در قالب یک آموزش کوتاه و کم‌هزینه.",
    cta: "همه‌ی لقمه‌ها",
  },
];

const FORMULAS = [
  { f: "F = ma", cls: "top-6 -right-4 md:-right-10" },
  { f: "E = mc²", cls: "top-1/3 -left-6 md:-left-12 [animation-delay:1.5s]" },
  { f: "v = λf", cls: "bottom-16 -right-6 md:-right-14 [animation-delay:3s]" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-grid relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:pb-24 md:pt-20">
          <div>
            <p className="text-sm font-bold text-accent-foreground">
              <span className="marker">در کلاس فیزیک سعید زینلی،</span>
            </p>
            <h1 className="mt-4 text-5xl leading-[1.25] text-primary md:text-6xl">
              فیزیک رو <span className="text-accent">بفهم</span>،<br />
              نه حفظ کن!
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
              از قانون‌های نیوتن تا فیزیک هسته‌ای؛ هر مفهوم را با مثال‌های واقعی و زبان ساده یاد بگیر و با خیال راحت سر جلسه‌ی امتحان و کنکور برو.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/soon">
                  از اینجا شروع کنید!
                  <ArrowLeft />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-card">
                <a href="#about">آشنایی با من</a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            {/* orbits */}
            <div className="pointer-events-none absolute -inset-10 rounded-full border-2 border-dashed border-primary/15 animate-orbit">
              <span className="absolute -top-2 left-1/2 size-4 rounded-full bg-accent shadow-lift" />
            </div>
            <div className="pointer-events-none absolute -inset-4 rounded-full border border-accent/30 animate-orbit-reverse">
              <span className="absolute bottom-6 -left-1.5 size-3 rounded-full bg-primary" />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2.5rem] bg-secondary shadow-lift ring-8 ring-card">
              <img
                src={PORTRAIT}
                alt="سعید زینلی، دبیر فیزیک دبیرستان"
                className="h-full w-full object-cover object-[50%_80%] mix-blend-multiply"
                width={1280}
                height={1920}
              />
            </div>

            {FORMULAS.map((x) => (
              <span
                key={x.f}
                dir="ltr"
                className={`absolute rounded-xl bg-card px-3 py-1.5 font-formula text-lg italic text-primary shadow-card animate-float ${x.cls}`}
              >
                {x.f}
              </span>
            ))}

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-primary px-5 py-3 text-center text-primary-foreground shadow-lift">
              <div className="font-display text-xl">سعید زینلی</div>
              <div className="text-xs opacity-80">دبیر فیزیک دبیرستان</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-3xl text-primary md:text-4xl">
          همین حالا پایه‌ی تحصیلی خود را انتخاب کنید:
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GRADES.map((g) => (
            <article
              key={g.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="pointer-events-none absolute left-6 top-24 font-display text-8xl leading-none text-secondary transition-colors group-hover:text-accent/20">
                {g.num}
              </span>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl text-primary">{g.name}</h3>
                  <ComingSoonBadge />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{g.book}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {g.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ink" className="mt-8 w-full rounded-full">
                  <Link to="/soon">{g.cta}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Free lessons */}
      <section className="bg-chalkboard">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Gift className="size-7" />
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl">آموزش‌های رایگان!</h2>
              <p className="mt-3 max-w-xl leading-8 text-board-muted">
                هدیه‌ی ویژه برای شما؛ چند آموزش رایگان تا با روش تدریس من آشنا شوید و ببینید فیزیک چقدر می‌تواند شیرین باشد.
              </p>
            </div>
          </div>
          <Button asChild variant="chalk" size="xl">
            <Link to="/soon">مشاهده‌ی آموزش‌های رایگان (به‌زودی)</Link>
          </Button>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-grid">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl text-primary md:text-4xl">معرفی دوره‌ها</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            هر دانش‌آموز مسیر خودش را دارد؛ دوره‌ای را انتخاب کنید که به هدف شما نزدیک‌تر است.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {COURSES.map((c, i) => (
              <article key={c.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <c.icon className="size-6" />
                  </span>
                  <ComingSoonBadge />
                </div>
                <h3 className="mt-6 text-2xl text-primary">
                  <span className="text-accent">{["۱", "۲", "۳"][i]}.</span> {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{c.text}</p>
                <Link
                  to="/soon"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-accent"
                >
                  {c.cta}
                  <ArrowLeft className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-card md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <h2 className="text-3xl text-primary md:text-4xl">کلاس‌های پیشِ‌رو</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <GraduationCap className="size-5 text-accent" />
                <span><b>پایه‌ها:</b> دهم تا دوازدهم</span>
              </li>
              <li className="flex items-center gap-3">
                <Video className="size-5 text-accent" />
                <span><b>نحوه‌ی برگزاری:</b> آنلاین</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-accent" />
                <span><b>و</b> حضوری</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="size-5 text-accent" />
                <span><b>گروه‌های کوچک</b> برای پرسش و پاسخ بیشتر</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-secondary p-7">
            <h3 className="text-xl text-primary">ثبت‌نام در کلاس</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              زمان‌بندی کلاس‌ها و راه ثبت‌نام به‌زودی اعلام می‌شود.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/soon">مشاهده‌ی همه‌ی کلاس‌ها</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] bg-secondary shadow-lift ring-8 ring-card">
            <img
              src={PORTRAIT}
              alt="سعید زینلی"
              loading="lazy"
              className="aspect-square w-full object-cover object-[50%_55%] mix-blend-multiply"
            />
          </div>
          <div>
            <h2 className="text-3xl text-primary md:text-5xl">با سعید زینلی بیشتر آشنا شوید!</h2>
            <p className="mt-3 text-lg font-bold text-accent-foreground">
              <span className="marker">دبیر فیزیک دبیرستان</span>
            </p>
            <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
              باور من ساده است: فیزیک یعنی فهمیدن دنیای اطرافمان. وقتی بدانی چرا یک فرمول این شکلی است، دیگر لازم نیست حفظش کنی. در کلاس‌هایم تلاش می‌کنم هر مفهوم را با مثال‌های روزمره و قدم‌به‌قدم توضیح بدهم تا فیزیک برایت شیرین شود.
            </p>
            <Button asChild variant="ink" size="xl" className="mt-8">
              <Link to="/soon">
                درباره‌ی من (به‌زودی)
                <ArrowLeft />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
