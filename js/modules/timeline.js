// ==========================================================
// Línea del tiempo: dibuja cada momento con sus polaroids
// ==========================================================
import { photo } from "../config.js";

const photoButton = (id) => `
  <button class="polaroid" type="button" data-photo="${id}" aria-label="Ver foto en grande">
    <img loading="lazy" src="${photo(id)}" alt="">
  </button>`;

const momentTemplate = (m) => `
  ${m.dividerBefore ? `<div class="timeline__divider reveal">${m.dividerBefore}</div>` : ""}
  <article class="moment reveal${m.featured ? " moment--featured" : ""}">
    <div class="moment__card">
      <div class="moment__date">${m.date}</div>
      <h3 class="moment__title">${m.title}</h3>
      <p class="moment__text">${m.text}</p>
      <div class="moment__photos">${m.photos.map(photoButton).join("")}</div>
    </div>
  </article>`;

/** Pinta la línea del tiempo dentro del contenedor indicado. */
export function renderTimeline(container, moments) {
  container.innerHTML = moments.map(momentTemplate).join("");
}
