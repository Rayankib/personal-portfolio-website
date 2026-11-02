const flowStates = [
  {
    title: "No active requests",
    story: "US5 · VOLUNTEER INBOX",
    description: "The volunteer sees an empty request inbox while available. A new help request can appear here.",
    alt: "A volunteer's empty help request inbox in the Linked Figma prototype."
  },
  {
    title: "New help request",
    story: "US5 · INCOMING ALERT",
    description: "A nearby request appears with limited information and one clear action to accept. Personal details remain hidden before acceptance.",
    alt: "A new Linked help request in the volunteer inbox, with an approximate-area note and an accept action."
  },
  {
    title: "Request accepted",
    story: "US6 · VOLUNTEER CONFIRMATION",
    description: "After accepting, the volunteer sees a confirmation and a clear next state. The prototype updates the request state.",
    alt: "The Linked volunteer view confirming that the request was accepted."
  },
  {
    title: "Requester confirmation",
    story: "US6 · REQUESTER STATUS",
    description: "The requester is told that a volunteer accepted and is coming. This is a proposed status in the prototype flow.",
    alt: "The Linked requester view showing that a volunteer accepted the help request."
  }
];

const fidelityImages = {
  low: [
    "assets/projects/linked/us5-us6-low-1-empty-inbox.png",
    "assets/projects/linked/us5-us6-low-2-incoming-request.png",
    "assets/projects/linked/us5-us6-low-3-volunteer-accepted.png",
    "assets/projects/linked/us5-us6-low-4-requester-confirmation.png"
  ],
  high: [
    "assets/projects/linked/us5-us6-high-1-empty-inbox.png",
    "assets/projects/linked/us5-us6-high-2-incoming-request.png",
    "assets/projects/linked/us5-us6-high-3-volunteer-accepted.png",
    "assets/projects/linked/us5-us6-high-4-requester-confirmation.png"
  ]
};

const flowImage = document.querySelector("[data-flow-image]");
const flowStageButtons = [...document.querySelectorAll("[data-flow-step]")];
const fidelityButtons = [...document.querySelectorAll("[data-fidelity]")];

if (flowImage && flowStageButtons.length && fidelityButtons.length) {
  const flowTitle = document.querySelector("[data-flow-title]");
  const flowStory = document.querySelector("[data-flow-story]");
  const flowDescription = document.querySelector("[data-flow-description]");
  const flowCaption = document.querySelector("[data-flow-caption]");
  const flowPosition = document.querySelector("[data-flow-position]");
  const flowStatus = document.querySelector("[data-flow-status]");
  let activeStage = 0;
  let activeFidelity = "high";

  const updateFlow = () => {
    const state = flowStates[activeStage];
    flowImage.classList.add("is-changing");
    flowImage.src = fidelityImages[activeFidelity][activeStage];
    flowImage.alt = `${activeFidelity === "high" ? "High-fidelity" : "Low-fidelity"} Figma prototype: ${state.alt}`;
    flowTitle.textContent = state.title;
    flowStory.textContent = state.story;
    flowDescription.textContent = state.description;
    flowCaption.textContent = `${activeFidelity === "high" ? "HIGH FIDELITY" : "LOW FIDELITY"}`;
    flowPosition.textContent = String(activeStage + 1).padStart(2, "0");
    flowStatus.textContent = `${activeFidelity === "high" ? "High-fidelity" : "Low-fidelity"} prototype, stage ${activeStage + 1} of 4: ${state.title}.`;
    flowStageButtons.forEach((button, index) => {
      button.setAttribute("aria-pressed", String(index === activeStage));
    });
    fidelityButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.fidelity === activeFidelity));
    });
    window.requestAnimationFrame(() => flowImage.classList.remove("is-changing"));
  };

  flowStageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeStage = Number(button.dataset.flowStep);
      updateFlow();
    });
  });

  fidelityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFidelity = button.dataset.fidelity;
      updateFlow();
    });
  });

  updateFlow();
}
