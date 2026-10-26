# Casa Siesta website review

**Reviewed:** 26 October 2026  
**Website:** [casa-siesta.org](https://casa-siesta.org/)  
**Repository revision:** `d90d6de`  
**Scope:** Updated live website, local HTML/CSS/JavaScript, seven language pages, desktop and mobile layouts, and comparison with the previous review. The live English HTML matched the local source during this review.

The site now answers more practical questions and gives guests stronger reasons to choose Casa Siesta. Keep the distinctive colours, typography, personal descriptions, and direct contact model. The highest priorities remain completing Brisa's photographs, explaining prices and booking confirmation, and shortening the mobile journey to the apartment details. The new amenities deserve more prominence than they currently receive.

**What improved since the previous review**

| Change | Benefit | Remaining opportunity |
| --- | --- | --- |
| Exact June–September opening period | Guests can establish whether their trip fits the season. | Repeat the season and seven-night minimum beside the enquiry buttons. |
| Pets explicitly stay free | Removes uncertainty about a common extra charge. | Mention this benefit near the opening and apartment summaries. |
| Paddleboard, kayaks, and bikes available to borrow | Adds a concrete reason to choose this property. | Show the equipment in real photographs and explain any shared availability arrangements. |
| Parking capacity of 5–6 cars | Makes arrival by car easier to assess. | Present it as capacity at the house, so it does not imply spaces per apartment. |
| Personal welcome or key box; early/late arrangements on request | Arrival feels more predictable. | Payment, cancellation, and reservation confirmation still need their own explanation. |
| Non-smoking stated explicitly | Clarifies an important house rule. | Place it with the other practical stay information. |
| Sourced seasonal weather table | Helps guests compare months. | Improve the mobile presentation and clarify what the temperature figures mean. |

The new amenities, season text, and weather figures are present across all seven languages. The shared stylesheet and script references consistently use version `v=8`.

**Highest-priority improvements**

1. **Complete Brisa's photo coverage.** Its three visible images still show two kitchen views and a wardrobe, followed by “more photos coming soon.” Guests cannot assess its bedroom, double sofa bed, living space, bathroom, or garden use. Add a representative set showing each space, including the sofa bed opened. Use a gallery with enlargement controls, as Mar already has. This requires owner photographs and is likely more valuable than adding further destination text. Source: [Brisa section](docs/index.html#L197).

2. **Add price guidance and explain how a reservation is confirmed.** Both apartments still say “On request.” Once rates are decided, show seasonal prices per apartment, the seven-night minimum, and the existing list of included costs together. Add a short explanation of deposit, payment timing, cancellation terms, and written confirmation using the actual business arrangements. The new arrival instructions are helpful, but answer a different question. Genuine guest reviews, with source and date, and a brief introduction to the hosts would also strengthen confidence in booking directly. Source: [apartment facts and inclusions](docs/index.html#L187).

3. **Bring useful apartment information forward on mobile.** At an emulated 390 × 844 viewport, the hero's main buttons begin approximately 888 pixels from the top, Mar's heading begins around 1,993 pixels down, and its facts around 2,345 pixels down. The sticky header and floating WhatsApp buttons remain available, but the guest has a long scroll before assessing the accommodation. Reduce the mobile hero photograph's height, put apartment names before their photographs, and show one lead image plus a clear gallery button instead of five large images before Mar's name. At widths up to 960 pixels the section navigation disappears; add a compact menu or persistent apartment jump link. Sources: [hero and apartment structure](docs/index.html#L157), [responsive styles](docs/styles.css#L387).

4. **Promote the new benefits near the first enquiry opportunity.** The equipment to borrow and free pet stays are meaningful differentiators, but currently sit below both apartment descriptions. At 390 pixels wide, the shared season paragraph is roughly 4,524 pixels down the page. Introduce a short, easily scanned line near the opening, for example: “Beach about 200 m · Pets stay free · Paddleboard, kayaks and bikes to borrow.” Keep the detailed amenities list below. If equipment is shared between apartments, explain that accurately rather than implying a separate allocation to every guest. Source: [shared amenities](docs/index.html#L224).

5. **Make enquiries easier to complete.** “Ask about dates and prices” communicates a more specific purpose than “Message us on WhatsApp.” The current apartment links prefill an apartment name, but no dates or guest count. A small arrival/departure/guest selector could prepare that information in a WhatsApp message and an email alternative. Keep the direct contact model; this does not require an online booking engine. A read-only availability calendar is a later option if someone will reliably keep it current. Sources: [hero actions](docs/index.html#L162), [apartment enquiry link](docs/index.html#L193).

6. **Correct the ferry instructions.** “Zadar harbour” remains ambiguous for guests arriving by car. Name Gaženica and link directly to ferry line 431; Jadrolinija specifies Gaženica as the departure port and approximately 25 minutes for the crossing. The Biograd–Tkon crossing is still described as 25 minutes in both the destination card and arrival instructions, while Jadrolinija currently states 20 minutes. Update both instances and their translations. The port distinction matters more than the five-minute difference. Sources: [current arrival text](docs/index.html#L393), [Jadrolinija Gaženica–Preko](https://www.jadrolinija.hr/en/travel/zadar_gazenica_-_osljak_-_preko_ugljan), [Jadrolinija Biograd–Tkon](https://www.jadrolinija.hr/en/travel/biograd_-_tkon_pasman).

**The new weather table**

The underlying data checks out: the displayed air temperatures, warm-day counts, rain-day counts, and daily sunshine values agree with the linked [DHMZ Zadar data for 1961–2024](https://meteo.hr/klima.php?section=klima_podaci&param=k1&Grad=zadar), allowing for rounding and converting monthly sunshine hours to daily averages. The rounded sea temperatures agree with the Zadar figures on the linked [Putovnica page attributing its data to DHMZ](https://www.putovnica.net/en/weather/climate/sea-temperature/average-sea-temperature-by-month).

Keep the source attribution and historical-average context. Improve the presentation as follows:

- **Make mobile scrolling discoverable.** At 390 pixels wide, the table is approximately 599 pixels wide inside a 350-pixel container. Horizontal scrolling works and is contained within that region, so this is not a page-wide overflow defect. However, sea temperature is initially clipped and the sunshine and rain columns are hidden. Add a visible scroll hint and consider keeping the month column fixed, or present each month as a compact mobile card.
- **Clarify the statistics.** The air figure is a mean across day and night, rather than a typical afternoon high. Label it accordingly. DHMZ's warm-day measure uses a daily maximum of **at least 25 °C**; the present “above 25 °C” heading could be made precise.
- **Give the table an accessible name.** Add a caption or connect the table itself to the existing weather heading with `aria-labelledby`. Row and column `scope` attributes are already present.

Sources in the code: [weather markup](docs/index.html#L307), [weather styles](docs/styles.css#L287). A modern reference period would be useful if an appropriate dataset becomes available; the current figures are reasonable when clearly presented as historical averages.

**Smaller technical and editorial fixes**

| Finding | Evidence and recommended action | Priority |
| --- | --- | --- |
| Slight header overflow on very narrow screens | At 320 pixels, document width is 322 pixels across the seven languages checked; the header WhatsApp link extends past the viewport. Reduce narrow-screen spacing or button padding. | Low |
| Missing closing tag in every language page | The `.wrap.trips` div opened at line 325 is not closed before the island section ends at line 385. Add the missing `</div>` in all seven pages. The browser repairs the markup, so this is a source-quality issue rather than an observed layout failure. | Low |
| Large hero image has no responsive alternatives | `hero.jpg` is 561,911 bytes, about 549 KiB, and the pages have no `srcset`. Add appropriately sized image variants and responsive selection. Preserve the existing lazy loading for below-the-fold photographs. | Medium |
| Destination content makes the mobile page long | The English page measured approximately 13,764 pixels tall at 390 pixels wide. Consider collapsible day-trip details and a nearby enquiry link before or after the island section. | Medium |
| Apartment comparison still requires reading paragraphs | Add a compact comparison of bedrooms, bed arrangements, floor, and outdoor space. Keep Brisa's bunk bed and double sofa bed particularly clear. Add floor area, terrace dimensions, stair/access details, and air-conditioning coverage once confirmed. | Medium |

The 320-pixel header overflow and missing closing tag predate the latest content changes. They are not regressions from the weather addition.

**Verification performed**

| Check | Result |
| --- | --- |
| Live English homepage | HTTP 200; HTML matched the repository version. |
| English responsive layouts | Checked widths of 320, 375, 390, 768, 960, 1024, 1440, and 1920 pixels. |
| Other six languages | Loaded each page and checked widths of 320, 390, and 1024 pixels. |
| New content consistency | New amenities, season information, climate rows, and asset versions checked across all seven local pages. |
| Local asset references and section anchors | No missing referenced local assets, broken fragment targets, or duplicate IDs found. |
| Mar gallery assets | All 20 full-size images exist; all seven caption sets contain 20 entries. |
| Gallery interaction | Opening, right-arrow navigation, Escape to close, and return of focus to the opening button worked in the browser check. |
| Language menu | Opens and exposes seven language links. |
| JavaScript and rendered images | No uncaught JavaScript errors or broken images observed during the browser run. |
| Weather table | Desktop presentation inspected; mobile horizontal scrolling confirmed. |
| Search metadata | Page titles, descriptions, canonical URLs, eight language-alternate links including `x-default`, and parseable `LodgingBusiness` JSON-LD are present. This does not establish search indexing or rich-result eligibility. |

These checks used Chrome with viewport emulation; physical-device testing, enquiry delivery, search indexing, analytics, and actual booking availability were outside the review. Translation checks covered consistency of the additions rather than a full native-speaker copy edit.

**Suggested next work**

| Can be implemented using current information | Needs owner input |
| --- | --- |
| Shorter mobile hero, compact galleries, and mobile navigation | Complete Brisa photo set |
| Earlier display of free pet stays and equipment to borrow | Seasonal rates and exact booking/payment/cancellation arrangements |
| Clearer WhatsApp enquiry wording and prepared enquiry details | Genuine guest reviews and host introduction |
| Weather scroll hint, caption, and statistical labels | Apartment sizes, access details, and equipment-sharing arrangements |
| Ferry wording, missing closing tags, and narrow-header fix | A reliable process for maintaining availability, if a calendar is added |

Only this review document was added. Website content, styles, scripts, and deployment were left unchanged.
