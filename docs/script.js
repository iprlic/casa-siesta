// Photo lightbox for Apartment Mar.
// Captions live in the page (one set per language) so this file stays shared.
const photoData = JSON.parse(document.getElementById("photo-data").textContent);
const photos = photoData.captions.map((alt, i) => ({
  src: `/img/mar/${String(i + 1).padStart(2, "0")}.jpg`,
  alt,
}));

const box = document.querySelector(".lightbox");
const img = box.querySelector("img");
const caption = box.querySelector("figcaption");
let current = 0;
let opener = null;

function show(i) {
  current = (i + photos.length) % photos.length;
  img.src = photos[current].src;
  img.alt = photos[current].alt;
  caption.textContent = `${photos[current].alt} (${current + 1} ${photoData.of} ${photos.length})`;
  // Warm the cache for the next photo so stepping through feels instant.
  new Image().src = photos[(current + 1) % photos.length].src;
}

document.querySelectorAll("[data-gallery] .g").forEach((btn) => {
  btn.addEventListener("click", () => {
    opener = btn;
    show(Number(btn.dataset.index));
    box.showModal();
  });
});

box.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
box.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
box.querySelector(".lb-close").addEventListener("click", () => box.close());
box.addEventListener("close", () => opener?.focus());

box.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") show(current + 1);
  if (e.key === "ArrowLeft") show(current - 1);
});

// Click on the dark area (not the photo or buttons) closes it.
box.addEventListener("click", (e) => {
  if (e.target === box || e.target.tagName === "FIGURE") box.close();
});

let touchX = null;
box.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
box.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  touchX = null;
});

// Close the language menu when clicking anywhere else.
const langs = document.querySelector(".langs");
document.addEventListener("click", (e) => {
  if (langs && langs.open && !langs.contains(e.target)) langs.open = false;
});

// On phones the day trips start folded to keep the page short; on wider screens they are always open.
const trips = document.querySelector(".trips-details");
if (trips) {
  const small = window.matchMedia("(max-width: 600px)");
  const sync = () => { if (!small.matches) trips.open = true; };
  if (small.matches) trips.open = false;
  small.addEventListener("change", sync);
}
