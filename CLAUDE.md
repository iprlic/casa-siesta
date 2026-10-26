# Casa Siesta website

Static one-page site for Casa Siesta, two family-run holiday apartments (Mar and Brisa) in Neviđane, Pašman island, Croatia. Live at https://casa-siesta.org, hosted on GitHub Pages from the `docs/` folder of this repo. No build step: plain HTML, CSS and a little JavaScript.

## Layout

- `docs/index.html`: English page.
- `docs/{hr,sl,de,cs,it,pl}/index.html`: Croatian, Slovenian, German, Czech, Italian and Polish versions. Same HTML structure as English, only the text differs.
- `docs/styles.css`, `docs/script.js`, `docs/img/`: shared by all languages. Always reference them with absolute paths (`/styles.css`, `/img/...`). The CSS and JS links carry a version (`/styles.css?v=4`): bump it in all 7 pages whenever you change `styles.css` or `script.js`, because GitHub Pages lets browsers cache them for 10 minutes and new HTML with old CSS breaks the layout.
- `docs/CNAME`, `docs/.nojekyll`: needed by GitHub Pages; don't remove.
- `docs/robots.txt`, `docs/sitemap.xml`, `docs/404.html`, `docs/favicon.ico`, `docs/img/social.jpg` (1200×630 link-preview image): SEO basics. When page content changes, update every `<lastmod>` date in `sitemap.xml`. A new language means a new entry in the sitemap, the hreflang block of every page, `og:locale:alternate` tags and `404.html`.
- `backup/`: old QloApps database dump and files. Private and gitignored; never commit it.

## Rules

- **Every content change goes into all 7 languages.** Edit English first, then make the same change, translated, in every `docs/xx/index.html`. Keep the tag structure identical across languages, and keep the hreflang block and the language menu in sync.
- Photo captions for the Mar gallery live in each page's `<script type="application/json" id="photo-data">`, not in `script.js`.
- Only state facts the owner has confirmed. Don't invent amenities, distances or prices.
- Booking is by WhatsApp (+385 98 830 940), phone or email (info@casa-siesta.org). There is no booking engine on purpose.
- Third-party photos need a visible credit (photographer and licence link), like the Tkon card. Own photos come from the owners' iCloud Photos via `osxphotos`; strip metadata (GPS) when converting, and don't publish photos where people can be recognised.

## Confirmed facts

- Officially rated 3 stars. Minimum stay 7 nights. Check-in from 14:00, check-out by 10:00.
- Both apartments: air conditioning, Wi-Fi, kitchen with dishwasher, washing machine, free parking.
- The price includes bed linen, towels, tourist tax and final cleaning. Prices are not set yet ("On request").
- Doctor and dentist in Neviđane. Restaurant in the village. Supermarket and ferry to Biograd in Tkon (10 km).

## Preview and publish

- Preview: `cd docs && python3 -m http.server 8000`, then open http://localhost:8000.
- Publish: commit and push to `main`; GitHub Pages deploys in a minute or two.
- DNS is on Cloudflare: 4 A records to GitHub Pages and `www` CNAME to `iprlic.github.io`, all "DNS only". Turning on the Cloudflare proxy breaks GitHub's certificate renewal.
