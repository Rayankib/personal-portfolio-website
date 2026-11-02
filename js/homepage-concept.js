const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const projectStage = document.querySelector("[data-project-stage]");

if (projectStage && !reducedMotion.matches) {
  const stageBounds = { left: 0, top: 0, width: 1, height: 1 };
  let pointer = null;
  let frame = 0;
  let measureFrame = 0;

  const measureStage = () => {
    const bounds = projectStage.getBoundingClientRect();
    stageBounds.left = bounds.left;
    stageBounds.top = bounds.top;
    stageBounds.width = bounds.width || 1;
    stageBounds.height = bounds.height || 1;
  };

  const renderDepth = () => {
    frame = 0;

    if (!pointer) {
      projectStage.style.setProperty("--pointer-x", "0");
      projectStage.style.setProperty("--pointer-y", "0");
      return;
    }

    const x = ((pointer.x - stageBounds.left) / stageBounds.width - 0.5) * 2;
    const y = ((pointer.y - stageBounds.top) / stageBounds.height - 0.5) * 2;
    projectStage.style.setProperty("--pointer-x", String(Math.max(-1, Math.min(1, x))));
    projectStage.style.setProperty("--pointer-y", String(Math.max(-1, Math.min(1, y))));
  };

  const requestDepthFrame = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(renderDepth);
  };

  const requestMeasure = () => {
    if (measureFrame) return;
    measureFrame = window.requestAnimationFrame(() => {
      measureFrame = 0;
      measureStage();
      if (pointer) requestDepthFrame();
    });
  };

  measureStage();
  window.addEventListener("resize", requestMeasure, { passive: true });
  window.addEventListener("scroll", requestMeasure, { passive: true });
  projectStage.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    pointer = { x: event.clientX, y: event.clientY };
    requestDepthFrame();
  });
  projectStage.addEventListener("pointerleave", () => {
    pointer = null;
    requestDepthFrame();
  });
}

if (projectStage) {
  const stageProjects = [...projectStage.querySelectorAll("[data-stage-project]")];

  const activateStageProject = (activeProject) => {
    stageProjects.forEach((project) => {
      project.classList.toggle("is-current", project === activeProject);
    });
  };

  stageProjects.forEach((project) => {
    project.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") activateStageProject(project);
    });
    project.addEventListener("focus", () => activateStageProject(project));
  });
}

const accordion = document.querySelector("[data-discipline-accordion]");

if (accordion) {
  const disciplines = [...accordion.querySelectorAll("[data-discipline]")];

  const selectDiscipline = (selectedDiscipline) => {
    disciplines.forEach((discipline) => {
      const selected = discipline === selectedDiscipline;
      const trigger = discipline.querySelector(".discipline__trigger");
      const content = discipline.querySelector(".discipline__content");

      discipline.classList.toggle("is-selected", selected);
      trigger.setAttribute("aria-expanded", String(selected));
      content.setAttribute("aria-hidden", String(!selected));
      content.inert = !selected;
    });

    accordion.dataset.active = selectedDiscipline.dataset.discipline;
  };

  disciplines.forEach((discipline) => {
    discipline.querySelector(".discipline__trigger").addEventListener("click", () => {
      selectDiscipline(discipline);
    });

    discipline.addEventListener("focusin", () => selectDiscipline(discipline));
    discipline.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") selectDiscipline(discipline);
    });
  });
}

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -9% 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((section) => revealObserver.observe(section));
} else {
  document.querySelectorAll("[data-reveal]").forEach((section) => section.classList.add("is-visible"));
}
