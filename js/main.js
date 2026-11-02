const sectionLinks = document.querySelectorAll("[data-section-navigation] a[href^='#']");
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const activeLink = document.querySelector(`[data-section-navigation] a[href="#${entry.target.id}"]`);
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

const disciplinePanels = document.querySelector(".discipline-panels");

if (disciplinePanels) {
  const panels = [...disciplinePanels.querySelectorAll("[data-discipline-panel]")];

  const selectDiscipline = (selectedPanel) => {
    panels.forEach((panel) => {
      const isSelected = panel === selectedPanel;
      const trigger = panel.querySelector(".discipline-trigger");
      const content = panel.querySelector(".discipline-content");

      panel.classList.toggle("is-selected", isSelected);
      trigger.setAttribute("aria-expanded", String(isSelected));
      content.setAttribute("aria-hidden", String(!isSelected));
      content.inert = !isSelected;
    });

    disciplinePanels.dataset.active = selectedPanel.dataset.discipline;
  };

  panels.forEach((panel) => {
    panel.querySelector(".discipline-trigger").addEventListener("click", () => selectDiscipline(panel));
    panel.addEventListener("focusin", () => selectDiscipline(panel));
    panel.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") selectDiscipline(panel);
    });
  });
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".page-wrapper [data-reveal]").forEach((section) => {
    section.classList.add("motion-ready");
    revealObserver.observe(section);
  });

  const parallaxPortrait = document.querySelector("[data-parallax]");

  if (parallaxPortrait) {
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const bounds = parallaxPortrait.getBoundingClientRect();
      const offset = Math.max(-28, Math.min(28, (bounds.top - window.innerHeight * 0.15) * -0.035));
      parallaxPortrait.style.setProperty("--parallax-offset", `${offset}px`);
    };

    const requestParallaxUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    requestParallaxUpdate();
  }
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