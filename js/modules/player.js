// ==========================================================
// Reproductor tipo "isla flotante"
// - Cerrado: pastilla arriba con carátula, título y play/pausa
// - Abierto: carátula grande, progreso, controles y lista
// ==========================================================
import { photo } from "../config.js";

const ICON_PLAY  = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1.2"/><rect x="14" y="5" width="4" height="14" rx="1.2"/></svg>';

const formatTime = (s) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

export function createPlayer(songs) {
  const audio  = new Audio();
  audio.preload = "metadata";

  const island = document.getElementById("island");
  const $ = (sel) => island.querySelector(sel);
  const el = {
    pill:       $(".island__pill"),
    miniCover:  $(".island__mini-cover"),
    miniTitle:  $(".island__mini-title"),
    miniToggle: $(".island__mini-toggle"),
    cover:      $(".island__cover"),
    title:      $(".island__title"),
    artist:     $(".island__artist"),
    seek:       $(".island__seek"),
    current:    $(".island__time-current"),
    duration:   $(".island__time-total"),
    toggle:     $(".island__toggle"),
    prev:       $(".island__prev"),
    next:       $(".island__next"),
    close:      $(".island__close"),
    list:       $(".island__list"),
  };
  let index = 0;
  let seeking = false;

  // Lista de canciones
  el.list.innerHTML = songs.map((s, i) => `
    <li><button class="island__track" type="button" data-index="${i}">
      <img src="${photo(s.cover)}" alt="">
      <span><b>${s.title}</b><small>${s.artist}</small></span>
      <span class="island__eq" aria-hidden="true"><i></i><i></i><i></i></span>
    </button></li>`).join("");

  function load(i) {
    index = (i + songs.length) % songs.length;
    const s = songs[index];
    audio.src = s.file;
    el.miniCover.src = el.cover.src = photo(s.cover);
    el.miniTitle.textContent = `${s.title} · ${s.artist}`;
    el.title.textContent = s.title;
    el.artist.textContent = s.artist;
    el.seek.value = 0;
    el.current.textContent = "0:00";
    el.list.querySelectorAll(".island__track").forEach((b, k) => b.classList.toggle("is-active", k === index));
    updateMediaSession(s);
  }

  function play(i) {
    if (i !== undefined && i !== index) load(i);
    else if (!audio.src) load(index);
    audio.play().catch(() => {}); // el navegador puede bloquearlo hasta que haya un toque
  }

  const toggle = () => (audio.paused ? play() : audio.pause());
  const expand = (open) => island.classList.toggle("is-expanded", open);

  function updateMediaSession(s) {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: s.title,
      artist: s.artist,
      album: "Nuestro álbum de recuerdos",
      artwork: [{ src: photo(s.cover), sizes: "512x512", type: "image/jpeg" }],
    });
    navigator.mediaSession.setActionHandler("play", () => play());
    navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    navigator.mediaSession.setActionHandler("previoustrack", () => play(index - 1));
    navigator.mediaSession.setActionHandler("nexttrack", () => play(index + 1));
  }

  // Estado de reproducción → interfaz
  const syncPlaying = () => {
    const playing = !audio.paused;
    island.classList.toggle("is-playing", playing);
    el.toggle.innerHTML = el.miniToggle.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
    el.toggle.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
    el.miniToggle.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
  };
  audio.addEventListener("play", syncPlaying);
  audio.addEventListener("pause", syncPlaying);
  audio.addEventListener("ended", () => play(index + 1));
  audio.addEventListener("loadedmetadata", () => { el.duration.textContent = formatTime(audio.duration); });
  audio.addEventListener("timeupdate", () => {
    if (seeking || !audio.duration) return;
    el.seek.value = (audio.currentTime / audio.duration) * 1000;
    el.current.textContent = formatTime(audio.currentTime);
  });

  // Controles
  el.pill.addEventListener("click", (e) => {
    if (e.target.closest(".island__mini-toggle")) return;
    expand(true);
  });
  el.pill.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target === el.pill) { e.preventDefault(); expand(true); }
  });
  el.miniToggle.addEventListener("click", toggle);
  el.toggle.addEventListener("click", toggle);
  el.prev.addEventListener("click", () => {
    if (audio.currentTime > 3) audio.currentTime = 0; // como Spotify: primero reinicia
    else play(index - 1);
  });
  el.next.addEventListener("click", () => play(index + 1));
  el.close.addEventListener("click", () => expand(false));
  el.list.addEventListener("click", (e) => {
    const t = e.target.closest(".island__track");
    if (t) play(Number(t.dataset.index));
  });

  el.seek.addEventListener("input", () => {
    seeking = true;
    if (audio.duration) el.current.textContent = formatTime((el.seek.value / 1000) * audio.duration);
  });
  el.seek.addEventListener("change", () => {
    if (audio.duration) audio.currentTime = (el.seek.value / 1000) * audio.duration;
    seeking = false;
  });

  // Cerrar al tocar fuera o con Esc
  document.addEventListener("click", (e) => {
    if (island.classList.contains("is-expanded") && !island.contains(e.target)) expand(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") expand(false); });

  load(0);
  syncPlaying();

  return {
    /** Muestra la isla y empieza la canción elegida. */
    start(i) {
      island.hidden = false;
      requestAnimationFrame(() => island.classList.add("is-visible"));
      play(i);
    },
  };
}
