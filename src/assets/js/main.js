const progress = document.querySelector(".progress span");
const sections = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".slide-nav a")];
const reveals = [...document.querySelectorAll(".reveal")];

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  { threshold: 0.22 }
);

for (const item of reveals) {
  revealObserver.observe(item);
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const active = `#${visible.target.id}`;
    for (const link of navLinks) {
      link.classList.toggle("is-active", link.getAttribute("href") === active);
    }
  },
  { threshold: [0.42, 0.62, 0.82] }
);

for (const section of sections) {
  sectionObserver.observe(section);
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

window.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowRight", "PageDown", "ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    return;
  }

  const currentIndex = sections.findIndex((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.45;
  });

  const direction = ["ArrowDown", "ArrowRight", "PageDown"].includes(event.key) ? 1 : -1;
  const next = sections[Math.min(sections.length - 1, Math.max(0, currentIndex + direction))];

  if (next) {
    event.preventDefault();
    next.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
