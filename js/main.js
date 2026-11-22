// ==========================================================
// Punto de entrada: arma la página y activa cada sección
// ==========================================================
import { START_DATE } from "./config.js";
import { MOMENTS, GALLERY } from "./data/recuerdos.js";
import { SONGS } from "./data/canciones.js";
import { createPlayer } from "./modules/player.js";
import { initWelcome } from "./modules/welcome.js";
import { renderTimeline } from "./modules/timeline.js";
import { renderGallery } from "./modules/gallery.js";
import { initLightbox } from "./modules/lightbox.js";
import { initLetter } from "./modules/letter.js";
import { initCounter } from "./modules/counter.js";
import { initSurprise } from "./modules/surprise.js";
import { initReveal } from "./modules/reveal.js";

// Música: primero elige canción, luego aparece la isla flotante
const player = createPlayer(SONGS);
initWelcome(SONGS, player);

renderTimeline(document.getElementById("timeline"), MOMENTS);
renderGallery(document.getElementById("gallery"), GALLERY);

initLightbox(GALLERY);
initLetter();
initCounter(START_DATE);
initSurprise();
initReveal(); // al final, para que incluya lo que se acaba de dibujar
