# Casa Siesta

Website for Casa Siesta, two family-run holiday apartments in Neviđane on the island of Pašman, Croatia.

**Live:** https://casa-siesta.org

It's a static one-page site: plain HTML, CSS and a little JavaScript, with no build step and no booking engine. Guests get in touch by WhatsApp, phone or email.

## Languages

| Language | Page | File |
|---|---|---|
| English | [/](https://casa-siesta.org/) | `docs/index.html` |
| Croatian | [/hr/](https://casa-siesta.org/hr/) | `docs/hr/index.html` |
| Slovenian | [/sl/](https://casa-siesta.org/sl/) | `docs/sl/index.html` |
| German | [/de/](https://casa-siesta.org/de/) | `docs/de/index.html` |
| Czech | [/cs/](https://casa-siesta.org/cs/) | `docs/cs/index.html` |
| Italian | [/it/](https://casa-siesta.org/it/) | `docs/it/index.html` |
| Polish | [/pl/](https://casa-siesta.org/pl/) | `docs/pl/index.html` |

All seven pages share the same HTML structure and the same `styles.css`, `script.js` and images.

## Repository layout

```
docs/              the website (the only folder GitHub Pages publishes)
  index.html       English page
  xx/index.html    one folder per translation
  styles.css       shared styles
  script.js        photo viewer and language menu
  img/             photos, favicon
  CNAME            custom domain for GitHub Pages
  robots.txt       crawler rules and sitemap location
  sitemap.xml      all 7 pages with their language alternates
  404.html         "page not found" in all languages
  .nojekyll        tells GitHub Pages to serve files as they are
CLAUDE.md          project rules for Claude Code
PROMOTION.md       checklist for getting found on Google, Maps and elsewhere
.claude/           shared Claude Code settings
backup/            old site's database dump (gitignored, never pushed)
```

## Preview locally

```sh
cd docs
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also open `docs/index.html` directly, but the map and the language links work properly only through the server.

## Making changes

1. **Text:** edit `docs/index.html`, then make the same change in each of the six translations. Every page should say the same thing.
2. **Styles or script:** after editing `styles.css` or `script.js`, raise the version number in the links on all seven pages (`/styles.css?v=4` becomes `?v=5`). Otherwise browsers may keep the old file for up to 10 minutes.
3. **Gallery captions:** they live in each page's `<script type="application/json" id="photo-data">` block, not in `script.js`.
4. **Sitemap:** when the content changes, update the `<lastmod>` dates in `docs/sitemap.xml`.
5. **Publish:** commit and push to `main`. GitHub Pages deploys in a minute or two.

### Adding photos

Resize photos and remove their metadata before adding them, because phone photos carry the GPS location in EXIF:

```sh
magick input.jpg -auto-orient -strip -resize 1600x1600\> -quality 78 -interlace Plane docs/img/name.jpg
```

## Hosting

- **Hosting:** GitHub Pages, publishing `main:/docs`, with HTTPS enforced.
- **DNS:** Cloudflare. `casa-siesta.org` has four A records pointing to GitHub Pages (`185.199.108.153` to `185.199.111.153`), and `www` is a CNAME to `iprlic.github.io`.
- **Keep the DNS records "DNS only".** Cloudflare's proxy (orange cloud) stops GitHub from renewing the HTTPS certificate.
- **Email** (info@casa-siesta.org) runs through Google Workspace and is separate from the website.
- **If you change the Pages folder** in the repo settings, GitHub clears the custom domain. Set `casa-siesta.org` again under Settings → Pages afterwards.

## Photo credits

Most photos are the owners' own, including the hero (Veliki Bokolj viewpoint), Brisa, the Mar gallery, the garden and the island photos. Originals are in the owners' iCloud Photos library and can be found with `osxphotos` (see `photos-inbox/`, which is gitignored). One comes from elsewhere:

- **Island seen from the ferry** (Tkon card): Coralie Ferreira, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trip_to_Croatia-Day_3-Zadar-Trip_to_Pasman_island_(2240106149).jpg). The credit is shown on the card.

The CC licence requires the visible credit the page shows; keep it if you move or reuse that photo.

## History

Until October 2026 the site ran QloApps, a PHP hotel booking system, on AWS Lightsail. That server has been shut down. A database dump and the site's files are kept in `backup/`, which is never committed.
