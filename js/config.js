// ==========================================================
// Configuración general del sitio
// ==========================================================

/** Fecha y hora en que empezamos (hora de Perú, UTC-5). */
export const START_DATE = new Date("2026-09-20T00:00:00-05:00");

/** Carpeta donde están las fotos. */
export const PHOTO_DIR = "assets/img";

/** Devuelve la ruta de una foto a partir de su número ("18" → assets/img/18.jpg). */
export const photo = (id) => `${PHOTO_DIR}/${id}.jpg`;
