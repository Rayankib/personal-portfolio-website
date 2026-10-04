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

const prototypeExplorer = document.querySelector("[data-prototype-explorer]");

if (prototypeExplorer) {
  const prototypeTabs = [...prototypeExplorer.querySelectorAll('[role="tab"]')];

  const activatePrototypeTab = (selectedTab, moveFocus = false) => {
    prototypeTabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      tab.classList.toggle("is-active", isSelected);
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
    });

    if (moveFocus) selectedTab.focus();
  };

  prototypeTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activatePrototypeTab(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % prototypeTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + prototypeTabs.length) % prototypeTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = prototypeTabs.length - 1;

      if (nextIndex === undefined) return;

      event.preventDefault();
      activatePrototypeTab(prototypeTabs[nextIndex], true);
    });
  });

  const imageDialog = document.querySelector(".prototype-dialog");
  const dialogImage = imageDialog?.querySelector(".prototype-dialog-image");
  let lastImageButton;

  if (imageDialog && dialogImage) {
    prototypeExplorer.querySelectorAll("[data-enlarge]").forEach((button) => {
      button.addEventListener("click", () => {
        const image = button.querySelector("img");
        lastImageButton = button;
        dialogImage.src = image.src;
        dialogImage.alt = image.alt;
        imageDialog.showModal();
      });
    });

    imageDialog.addEventListener("click", (event) => {
      if (event.target === imageDialog) imageDialog.close();
    });

    imageDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      imageDialog.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !imageDialog.open) return;

      event.preventDefault();
      imageDialog.close();
    });

    imageDialog.addEventListener("close", () => lastImageButton?.focus());
  }
}