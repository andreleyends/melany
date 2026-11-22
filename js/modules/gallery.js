// ==========================================================
// Galería: mosaico con todas las fotos
// ==========================================================
import { photo } from "../config.js";

/** Pinta la galería dentro del contenedor indicado. */
export function renderGallery(container, photos) {
  container.innerHTML = photos
    .map((id) => `
      <button class="gallery__item" type="button" data-photo="${id}" aria-label="Ver foto en grande">
        <img loading="lazy" src="${photo(id)}" alt="">
      </button>`)
    .join("");
}
