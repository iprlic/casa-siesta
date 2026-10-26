# Casa Siesta website and content review

**Updated:** 26 October 2026

**Latest local revision checked:** `165ee5e`

**Website:** [casa-siesta.org](https://casa-siesta.org/)

**Scope:** Content additions, HTML, SEO, structured data, accessibility, browser behavior, and performance basics across the seven language pages.

The site has a sound technical foundation, and several findings from the first review have been addressed. The remaining technical issues are small markup, structured-data, and keyboard-interaction problems. The largest content opportunity is still helping guests picture their stay and feel comfortable making a direct reservation.

**Version note:** During this follow-up, the live pages served the `v=9` version while local revision `165ee5e` contained `v=10`, including newly confirmed prices. The live homepage still differed after a fresh query-string request. The prices below were verified in the local source; their deployment was not confirmed during this check. The HTML findings described below are present in both versions.

**Progress since the first review**

| Previous finding | Current status |
| --- | --- |
| Prices only available on request | Addressed in the local source: both apartments are €100 per night, or €120 from 15 July to 15 August, for the whole apartment. Inclusions remain explicit. |
| Main mobile navigation disappeared | Addressed: the section links now appear in a scrollable second header row. |
| Slight page overflow at 320 pixels | Addressed in the browser checks at 320, 390, 768, 1024, and 1440 pixels. |
| Apartment descriptions appeared after large galleries on mobile | Improved: the apartment body is now displayed before its photographs, and Mar's mobile gallery is shorter. Keyboard order needs a follow-up, described below. |
| Long mobile opening | Improved: the hero photograph is shorter and the first enquiry button is visible in the checked 390 × 844 layout. |
| Important benefits were buried | Addressed: beach distance, free pet stays, and equipment to borrow are highlighted near the opening. The local source also adds the starting price. |
| Weather table lacked a scroll hint and accessible table name | Addressed: a mobile hint, `aria-labelledby` on the table, and clearer statistical labels are present. Two redundant wrapper labels still fail HTML validation. |
| Missing closing tag around day trips | Addressed: the HTML tag-balance check now passes across all seven pages and the 404 page. |
| Large hero photograph lacked responsive alternatives | Addressed: 800-, 1200-, 1600-, and 2400-pixel variants are available with `srcset`, `sizes`, and high fetch priority. |
| Ferry directions were ambiguous | Addressed: Gaženica and the direct timetable are specified; Biograd–Tkon is now 20 minutes. |
| Long day-trip section on phones | Improved: it starts folded on phones. The opening control disappears after expansion, which needs attention. |
| Incomplete Brisa photographs | Still outstanding. The visible set covers the kitchen and wardrobe, with more photographs promised. |

**Useful content additions**

These are proposed additions. Details marked for confirmation should be supplied by the owners before publication. Keep the public content consistent across all seven languages.

1. **A practical guide to the beach.** Name the exact beach near the house, show a simple walking route, and add photographs taken at beach level. Explain the shore surface, entry into the water, natural shade, showers, and refreshments. Confirm those details for the actual beach shown; the [tourist board's beach guide](https://www.pasman.hr/pasman/beaches) can be linked as a reference for other options. Place this beside the existing beach description. It would answer more useful questions than a distance alone.

2. **“Which apartment suits you?”** Add a compact comparison and, ideally, simple floor plans. Include bedrooms, sleeping arrangements, floor, outdoor space, and apartment sizes once known. Clearly distinguish Mar's roof terrace from shared garden areas, and explain steps or access limitations. Suggested copy using confirmed facts: “Mar has two bedrooms upstairs, a balcony and a roof terrace. Brisa is on the ground floor, with a bunk bed in the bedroom and a double sofa bed in the living room.” Place the comparison before the detailed apartment descriptions.

3. **“How booking works.”** Explain the enquiry, quote, payment, and confirmation process. Suggested opening: “Send us your dates, how many adults and children are coming, and which apartment you prefer. We'll confirm availability and the price for your stay.” Follow this with the actual deposit, payment timing, cancellation arrangements, and what makes a reservation confirmed. Those business terms still need owner input. Place this near the apartment enquiries or in a short FAQ.

4. **“Do we need a car?”** Describe what guests can reasonably do on foot, how they would buy groceries, and how they can travel from the ferry to the house. Confirm actual local transport or transfer options before recommending them. This is particularly helpful because the site lists the nearest supermarket as approximately 3 km away. Place it in the arrival section or FAQ.

5. **A family, pet, and equipment FAQ.** Answer whether the garden is enclosed, what guests should know about steps and terrace access, how to request the cot and high chair, and any actual pet arrangements. Explain how borrowing the paddleboard, kayaks, and bikes works, including quantities, sizes, and any shared availability. These are questions to answer, not amenities or rules already established by this review. A compact FAQ near the apartment details would make them easy to find.

6. **Meet your hosts.** Add the hosts' names, a photograph they are comfortable publishing, and a short account of their connection to the house and island. Include a personal recommendation, such as a favourite morning walk or swimming spot. Use the owners' own story and recommendations. Place this beside the house-and-garden section. Genuine guest reviews with source and date would complement it.

7. **“Your first afternoon here.”** Give a short arrival guide: where to park, how keys are handed over, where to buy essentials, the route to the beach, and a personal suggestion for dinner. Confirm the local details and links. Add a practical packing note using facts already established: “Bed linen and towels are included. Please bring your own beach towels and sunshade. You can also borrow our paddleboard, kayaks and bikes during your stay.” Keep the main page concise; a fuller welcome guide can be shared after booking.

**HTML and accessibility findings**

| Finding | Evidence | Recommended action | Priority |
| --- | --- | --- | --- |
| Two invalid labels on generic divs | The W3C HTML checker reports errors for `.wrap.climate` and `.wrap.trips`, which use `aria-labelledby` on generic `div` elements without an appropriate role. Both patterns occur in all seven pages. | Remove the redundant labels from the wrappers, or use suitable semantic sections. Keep the existing label on the weather table. | Low |
| Empty image source in the lightbox | The checker reports `<img src="" alt="">` as invalid. The same markup occurs in all seven pages. | Use a valid lightweight placeholder or create the image when the gallery opens. | Low |
| Day trips cannot be folded again after opening on mobile | Keyboard activation opens the details element, then `.trips-details[open] > summary { display: none; }` hides its control. In the browser check, focus remained on a summary with no visible box. | Keep the summary visible when open and provide a clear collapse label. The guest should be able to open and close the section with a keyboard or touch. | Medium |
| Mobile navigation clips the focus outline | A focused navigation link has a 3-pixel outline with a 3-pixel offset, but the navigation's scrolling box clips most of it. The screenshot inspection showed only a narrow side segment. | Reserve space inside the scrolling container for the outline, or use an inset focus indicator that stays visible. | Medium |
| Mobile visual order differs from keyboard order | `.apt-body { order: -1; }` moves text and enquiry buttons above galleries visually, while the DOM still places gallery buttons first. Keyboard navigation therefore reaches photographs before an enquiry button displayed above them. | Put the heading and key facts in a sensible source order, then use desktop layout rules to position the gallery. Check that tab order follows a clear visual sequence. | Medium |

Sources in the repository: [English HTML](docs/index.html), [shared stylesheet](docs/styles.css), and [gallery/disclosure script](docs/script.js). The W3C checks were run against the public English and German pages and each reported the same three markup errors: two wrapper labels and one empty image source. Inspection confirmed those patterns in the other five local language pages. These are small validation issues; the browser was able to render the pages.

The keyboard-control recommendations follow the [W3C disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) and [visible-focus guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). This was a targeted accessibility review, not a full conformance audit.

**SEO and structured data**

The multilingual setup is consistent. Every language page has its own canonical URL, a translated title and description, the correct HTML language, and reciprocal alternate links for all seven languages plus `x-default`. All seven sitemap entries contain the matching alternates. This agrees with Google's [localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

| Finding or check | Result and action |
| --- | --- |
| `numberOfRooms: 2` | This appears to count apartments. Schema.org defines the property as rooms, excluding bathrooms and closets; the visible descriptions already establish three bedrooms across the apartments. Correct the value after confirming the intended room count, or omit it. See [numberOfRooms](https://schema.org/numberOfRooms). |
| `inLanguage` on `LodgingBusiness` | The property describes content language and is not listed for `LodgingBusiness`. Move it to a separate `WebPage` node if one is added, or omit this redundant business property. Keep the hosts' Croatian and English language information distinct from the seven website translations. See [inLanguage](https://schema.org/inLanguage) and [LodgingBusiness](https://schema.org/LodgingBusiness). |
| New price markup | The local source's `priceRange` agrees with the visible €100–€120 range. It describes a range, rather than date-specific bookable offers. |
| Main headings and metadata | Each page has one H1, a title, a description, and a self-canonical. Adding a short visible “Holiday apartments in Neviđane, Pašman” descriptor is an optional clarity improvement. The brand-only H1 is not an HTML error. |
| Crawling controls | The live `robots.txt` returns HTTP 200 and permits crawling; the main pages have no `noindex` directive. The sitemap returns HTTP 200 as XML. |
| Redirects | HTTP to HTTPS, `www` to the root domain, and `/de` to `/de/` return 301 redirects with the expected destinations. The language path is preserved. |
| Error handling | A deliberately nonexistent URL returns HTTP 404. The custom 404 source also has `noindex`. |
| `/index.html` alias | It returns HTTP 200, while its canonical points to `/`. This is a minor duplicate URL already covered by the canonical; it is not an indexing blocker identified by this audit. |
| JSON-LD syntax | Parses successfully across all seven pages. Semantic corrections above are still worthwhile. |
| Search-result eligibility | General lodging markup does not establish eligibility for Google's vacation-rental presentation. That feature has integration and eligibility requirements; do not assume changing the type alone will enable it. See [Google's vacation-rental documentation](https://developers.google.com/search/docs/appearance/structured-data/vacation-rental). |

No obvious crawl-blocking or multilingual-canonical problem was found in these checks. Actual indexing, Google-selected canonical URLs, impressions, and search queries need to be checked in Search Console; public page inspection cannot establish them.

**Performance and browser checks**

| Check | Result |
| --- | --- |
| Hero image delivery | Responsive variants are now present. File sizes are 66,715 bytes at 800 pixels, 147,056 at 1200, and 251,562 at 1600, compared with the original 561,911-byte photograph. The image remains discoverable in HTML with high fetch priority. |
| Below-the-fold photographs | Existing lazy loading is preserved. Many other photographs still use JPEG only; modern formats and appropriately sized variants are optional further improvements. |
| Fonts | The site requests Google Fonts with `display=swap` and preconnects to the font hosts. Self-hosting the required font files is a possible future reduction in third-party requests. |
| Local references | No missing referenced assets, broken fragment links, or duplicate IDs found across the seven pages and 404 page. Responsive hero source paths were included. |
| HTML structure | Explicit tag-balance checks passed across all eight HTML files. This is separate from the W3C semantic errors listed above. |
| Images | Every image has an `alt` attribute; empty alternatives on decorative flags and the logo are intentional. All 20 Mar gallery images exist. |
| Live language pages | All seven loaded with HTTP 200. Their source still differed from the local pricing revision during the checks. |
| Responsive layout | No page-wide overflow in the checked English widths of 320, 390, 768, 1024, and 1440 pixels. The seven live language pages also fit the checked 390-pixel viewport. |
| Navigation anchors | In the local 390-pixel check, the apartments heading remained below the sticky header after following its section link. |
| Gallery interaction | Opening the gallery, moving right with the keyboard, and closing with Escape worked. No uncaught JavaScript errors were observed in the live or local browser runs. |
| Weather table | Retains contained horizontal scrolling, a mobile hint, header scopes, and an accessible table label. |

These are implementation and browser checks, not measured Core Web Vitals. There is no Lighthouse score or verified real-user performance result in this review. If performance becomes a concern, measure mobile visits before choosing further work; [web.dev explains the distinction between lab and field LCP data](https://web.dev/articles/optimize-lcp).

**Suggested order of work**

1. Keep the day-trip control and mobile keyboard focus visible; align mobile visual and source order.
2. Resolve the three shared HTML validation errors and the two structured-data fields.
3. Confirm deployment of the latest prices and asset versions.
4. Complete Brisa's photographs and provide actual booking/payment/cancellation terms.
5. Add the beach guide, apartment comparison, and concise practical FAQ.
6. Add the hosts' introduction and first-afternoon guide when the personal details are ready.

Only this Markdown review was edited for this task. No website files or deployment were changed by the reviewer.
