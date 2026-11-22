// ==========================================================
// Carta: el sobre se abre y aparece la carta
// ==========================================================
const FLAP_ANIMATION_MS = 650;

export function initLetter() {
  const envelope = document.getElementById("envelope");
  const letter   = document.getElementById("letter");

  envelope.addEventListener("click", () => {
    envelope.classList.add("is-open");
    setTimeout(() => {
      envelope.hidden = true;
      letter.classList.add("is-open");
      letter.scrollIntoView({ behavior: "smooth", block: "start" });
    }, FLAP_ANIMATION_MS);
  });
}
