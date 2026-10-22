# Getting found online

Checklist for making Casa Siesta easier to find on Google, Maps and elsewhere. For holiday rentals, map listings matter more than ordinary search results, so start at the top.

## 1. Google Business Profile

https://business.google.com (this is the listing guests leave reviews on)

- [ ] Website: `https://casa-siesta.org`
- [ ] Add WhatsApp (+385 98 830 940) under contact options
- [ ] Category: "Holiday apartment rental"; second category: "Holiday home"
- [ ] Upload 10–20 good photos: roof terrace, bedrooms, kitchen, the view, the house
- [ ] Fill in amenities: Wi-Fi, air conditioning, free parking, kitchen, washing machine
- [ ] Write the description (up to 750 characters)
- [ ] Get the "Ask for reviews" link (`g.page/r/…/review`) and send it to every guest after their stay
- [ ] Add that review link to the website ("Leave a review" button)
- [ ] Reply to reviews; it shows future guests you're responsive

## 2. Google Search Console

https://search.google.com/search-console

- [x] Submit `https://casa-siesta.org/sitemap.xml`
- [ ] Check that the sitemap status changes from "Couldn't fetch" to "Success" (usually within 1–2 days); if not, resubmit
- [ ] Check the property is `casa-siesta.org` (Domain) or `https://casa-siesta.org/`, not the `www` or `http://` version
- [ ] URL Inspection → Request indexing for `/`, `/de/`, `/hr/` and the other languages
- [ ] After a week: **Pages** report (which pages are indexed) and **Performance** (search terms and countries)
- [ ] Check structured data with the Rich Results Test: https://search.google.com/test/rich-results?url=https://casa-siesta.org/

## 3. Bing Webmaster Tools

https://www.bing.com/webmasters

- [ ] Sign in and choose "Import from Google Search Console" (about 2 minutes)

Bing also powers DuckDuckGo, Yahoo, Ecosia and ChatGPT's web search.

## 4. Apple Business Connect

https://businessconnect.apple.com

- [ ] Create a free listing so Casa Siesta appears on Apple Maps, which iPhones use for directions

## 5. Local listings

- [ ] **Pašman tourist board** (https://www.pasman.hr): ask to be listed in their private accommodation directory with a link to casa-siesta.org
- [ ] **OpenStreetMap** (https://www.openstreetmap.org): add the house at Put Tratice 6 as `tourism=apartment` with website and phone. Many map apps and car navigation systems use this data.

## 6. Social profiles (optional)

- [ ] Instagram and/or Facebook page with the website link and a few photos
- [ ] Once created, add the links to the website footer

## Website to-dos that depend on the owner

- [ ] Prices per season (currently "On request")
- [ ] Photos of Apartment Brisa
- [ ] Guest reviews section: send review text, guest's first name, stars and date
- [ ] Availability calendar: private Google Calendar per apartment, shown on the site through a free Cloudflare Worker (recommended setup, not built yet)
- [ ] Optional: host the fonts with the site and use a click-to-load map, to avoid GDPR warning letters (deferred for now)
