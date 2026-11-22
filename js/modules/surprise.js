// ==========================================================
// Sorpresa final: revela el mensaje y hace llover corazones
// ==========================================================
const HEART_COUNT = 40;
const HEART_PATH = "M12 21s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 8.3a4.2 4.2 0 0 1 7.5 2.5C19.5 16.4 12 21 12 21z";

const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const random = (min, max) => min + Math.random() * (max - min);

function createHeart() {
  const heart = document.createElement("div");
  const size = random(14, 36);
  const color = `hsl(${random(340, 365)}, 80%, ${random(55, 70)}%)`;

  heart.className = "falling-heart";
  heart.style.left = `${random(0, 100)}vw`;
  heart.style.animationDuration = `${random(3, 6)}s`;
  heart.style.animationDelay = `${random(0, 1.5)}s`;
  heart.style.setProperty("--rotation", `${random(-180, 180)}deg`);
  heart.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="${HEART_PATH}"/></svg>`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

function rainHearts() {
  if (prefersReducedMotion()) return;
  for (let i = 0; i < HEART_COUNT; i++) createHeart();
}

export function initSurprise() {
  const button = document.getElementById("reveal-btn");
  const secret = document.getElementById("secret");

  button.addEventListener("click", () => {
    secret.classList.add("is-open");
    button.textContent = "Te quiero mucho";
    rainHearts();
  });
}
