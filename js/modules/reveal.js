// ==========================================================
// Animación de aparición al hacer scroll
// Todo elemento con la clase .reveal aparece al entrar en pantalla
// ==========================================================
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
