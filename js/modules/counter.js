// ==========================================================
// Contador en vivo: días, horas, minutos y segundos juntos
// ==========================================================
const pad = (n) => String(n).padStart(2, "0");

/** Meses completos entre dos fechas. */
function monthsBetween(start, now) {
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months--;
  return Math.max(0, months);
}

export function initCounter(startDate) {
  const el = {
    days:    document.getElementById("count-days"),
    hours:   document.getElementById("count-hours"),
    minutes: document.getElementById("count-minutes"),
    seconds: document.getElementById("count-seconds"),
    since:   document.getElementById("count-since"),
  };
  const sinceText = el.since.textContent;

  const tick = () => {
    let s = Math.max(0, Math.floor((Date.now() - startDate) / 1000));
    el.days.textContent    = Math.floor(s / 86400); s %= 86400;
    el.hours.textContent   = pad(Math.floor(s / 3600));
    el.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    el.seconds.textContent = pad(s % 60);

    const m = monthsBetween(startDate, new Date());
    if (m > 0) el.since.textContent = `${sinceText} · ${m} ${m === 1 ? "mes" : "meses"} contigo`;
  };

  tick();
  setInterval(tick, 1000);
}
