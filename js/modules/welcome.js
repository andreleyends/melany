// ==========================================================
// Pantalla de bienvenida: ella elige una canción para empezar.
// Ese toque es el que permite al navegador reproducir el audio.
// ==========================================================
import { photo } from "../config.js";

const FADE_MS = 700;

export function initWelcome(songs, player) {
  const screen = document.getElementById("welcome");
  const list   = document.getElementById("welcome-songs");

  document.body.classList.add("is-locked");

  list.innerHTML = songs.map((s, i) => `
    <button class="welcome__song" type="button" data-index="${i}" style="--i:${i}">
      <img src="${photo(s.cover)}" alt="">
      <span class="welcome__song-text"><b>${s.title}</b><small>${s.artist}</small></span>
      <span class="welcome__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg></span>
    </button>`).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".welcome__song");
    if (!btn) return;

    player.start(Number(btn.dataset.index));
    screen.classList.add("is-leaving");
    document.body.classList.remove("is-locked");
    setTimeout(() => { screen.hidden = true; }, FADE_MS);
  });
}
