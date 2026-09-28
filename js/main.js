const sectionLinks = document.querySelectorAll(".bottom-nav a[href^='#']");
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const activeLink = document.querySelector(`.bottom-nav a[href="#${entry.target.id}"]`);
        if (!activeLink) continue;

        sectionLinks.forEach((link) => {
          link.classList.toggle("active", link === activeLink);
          if (link === activeLink) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    },
    { rootMargin: "-25% 0px -65% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}