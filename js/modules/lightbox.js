// ==========================================================
// Visor de fotos: abrir, cerrar, anterior/siguiente,
// teclado (← → Esc) y deslizar con el dedo
// ==========================================================
import { photo } from "../config.js";

const SWIPE_THRESHOLD = 45; // píxeles mínimos para contar un deslizamiento

export function initLightbox(photos) {
  const box     = document.getElementById("lightbox");
  const img     = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  let index = 0;

  const show = (i) => {
    index = (i + photos.length) % photos.length;
    img.src = photo(photos[index]);
    counter.textContent = `${index + 1} / ${photos.length}`;
  };

  const open = (id) => {
    show(Math.max(0, photos.indexOf(id)));
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  // Cualquier botón con data-photo abre el visor
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-photo]");
    if (trigger) open(trigger.dataset.photo);
  });

  document.getElementById("lightbox-close").addEventListener("click", close);
  document.getElementById("lightbox-prev").addEventListener("click", () => show(index - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  let startX = null;
  box.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > SWIPE_THRESHOLD) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
}
