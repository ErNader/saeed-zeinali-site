# دیپلوی روی کلودفلر (Cloudflare Workers)

این سایت یک **Worker** است: هم کد سرور دارد و هم فایل‌های ثابت (عکس، آیکون).
خروجی ساخت در پوشه‌ی `dist/` ساخته می‌شود:

- `dist/server/index.mjs` → خودِ Worker
- `dist/server/wrangler.json` → تنظیمات Worker (اسم، پوشه‌ی فایل‌ها)
- `dist/client/` → فایل‌های ثابت، از جمله `saeed-zeinali.jpg`

---

## روش ۱ — از مخزن گیت‌هاب (توصیه)

در پنل کلودفلر: **Workers & Pages → Create → Workers → Import a repository**
حساب گیت‌هاب را وصل کنید و مخزن این سایت را انتخاب کنید. بعد تنظیمات را این‌طور بگذارید:

| تنظیم | مقدار |
| --- | --- |
| Build command | `bun install && bun run build` |
| Deploy command | `npx wrangler deploy --config dist/server/wrangler.json` |
| Root directory | خالی |
| Variables | `NODE_VERSION` = `22` |

روی **Save and Deploy** بزنید. سایت روی آدرسی شبیه `xxx.workers.dev` بالا می‌آید.

اگر `bun` را نمی‌خواهید، به‌جای دو خط بالا این را بگذارید:

```bash
Build command:  npm install --legacy-peer-deps && npm run build
Deploy command: npx wrangler deploy --config dist/server/wrangler.json
```

### اسم Worker

اسم پیش‌فرض Worker از `dist/server/wrangler.json` خوانده می‌شود: `tanstack-start-ts`.
اگر این اسم روی حساب شما گرفته شده یا اسم دیگری می‌خواهید، به Deploy command اضافه کنید:

```bash
npx wrangler deploy --config dist/server/wrangler.json --name my-worker
```

---

## روش ۲ — از کامپیوتر خودتان

اگر فایل‌ها را دانلود کرده‌اید (بدون گیت‌هاب)، داخل پوشه‌ی سایت:

```bash
bun install
bun run build
npx wrangler deploy --config dist/server/wrangler.json
```

بار اول از شما می‌خواهد وارد حساب کلودفلر شوید (`wrangler` خودش مرورگر را باز می‌کند).

### امتحان بدون دیپلوی

```bash
# فقط بررسی می‌کند که همه‌چیز درست ساخته شده، چیزی آپلود نمی‌کند
npx wrangler deploy --dry-run --config dist/server/wrangler.json

# پیش‌نمایش محلی سایت ساخته‌شده
npx wrangler --cwd dist dev
```

---

## دامنه‌ی خودتان

داخل همان Worker: **Settings → Domains & Routes → Add → Custom domain**
اگر دامنه روی همان حساب کلودفلر باشد، DNS خودش تنظیم می‌شود.

---

## به‌روزرسانی سایت

هر تغییری که در مخزن گیت‌هاب (شاخه‌ی متصل) بیفتد، کلودفلر خودش دوباره می‌سازد و
جایگزین می‌کند. اگر مخزن را دستی می‌سازید، بعد از هر تغییر:
`git add . && git commit -m "..." && git push`
