const typedEl = document.querySelector(".typed-text");
const typedWords = ["ships", "scales", "reliable", "secure"];

if (typedEl) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    let wordIndex = 0;
    window.setInterval(() => {
      wordIndex = (wordIndex + 1) % typedWords.length;
      typedEl.textContent = typedWords[wordIndex];
    }, 2800);
  } else {
    let wordIndex = 0;
    let charIndex = typedWords[0].length;
    let deleting = true;

    const type = () => {
      const word = typedWords[wordIndex];
      typedEl.textContent = word.slice(0, charIndex);

      let delay = deleting ? 55 : 95;

      if (!deleting && charIndex === word.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % typedWords.length;
        delay = 280;
      } else {
        charIndex += deleting ? -1 : 1;
      }

      window.setTimeout(type, delay);
    };

    window.setTimeout(type, 1600);
  }
}

const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
