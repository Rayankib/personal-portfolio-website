(() => {
  const demo = document.querySelector("[data-skraw-demo]");
  if (!demo) return;

  const canvas = demo.querySelector("[data-demo-canvas]");
  const colorInput = demo.querySelector("[data-canvas-color]");
  const brushInput = demo.querySelector("[data-brush-size]");
  const brushValue = demo.querySelector("[data-brush-value]");
  const undoButton = demo.querySelector("[data-undo]");
  const redoButton = demo.querySelector("[data-redo]");
  const clearButton = demo.querySelector("[data-clear]");
  const resetDemoButton = demo.querySelector("[data-reset-demo]");
  const status = demo.querySelector("[data-demo-status]");
  const timerOutput = document.querySelector("[data-demo-time]");
  const timerProgress = document.querySelector("[data-demo-progress]");
  const timerToggle = document.querySelector("[data-timer-toggle]");
  const timerReset = document.querySelector("[data-timer-reset]");

  if (!canvas || !colorInput || !brushInput || !brushValue || !undoButton || !redoButton || !clearButton || !resetDemoButton || !status || !timerOutput || !timerProgress || !timerToggle || !timerReset) return;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return;

  const historyLimit = 30;
  const undoStack = [];
  const redoStack = [];
  let activePointer = null;
  let timerRemaining = 60;
  let timerInterval = null;

  const updateHistoryControls = () => {
    undoButton.disabled = undoStack.length === 0;
    redoButton.disabled = redoStack.length === 0;
  };

  const saveState = () => {
    undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    if (undoStack.length > historyLimit) undoStack.shift();
    redoStack.length = 0;
    updateHistoryControls();
  };

  const fillCanvas = () => {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
  };

  const resizeCanvas = () => {
    const previous = document.createElement("canvas");
    previous.width = canvas.width;
    previous.height = canvas.height;
    if (previous.width && previous.height) {
      previous.getContext("2d", { willReadFrequently: true }).putImageData(context.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
    }

    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(bounds.width * pixelRatio));
    canvas.height = Math.max(1, Math.round(bounds.height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    fillCanvas();

    if (previous.width && previous.height) {
      context.drawImage(previous, 0, 0, previous.width, previous.height, 0, 0, bounds.width, bounds.height);
    }

    undoStack.length = 0;
    redoStack.length = 0;
    updateHistoryControls();
  };

  const pointFromEvent = (event) => {
    const bounds = canvas.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };

  const stopDrawing = (event) => {
    if (activePointer !== event.pointerId) return;
    activePointer = null;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  };

  canvas.addEventListener("pointerdown", (event) => {
    if (activePointer !== null) return;
    event.preventDefault();
    canvas.focus({ preventScroll: true });
    activePointer = event.pointerId;
    canvas.setPointerCapture(event.pointerId);
    saveState();

    const point = pointFromEvent(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.lineTo(point.x, point.y);
    context.strokeStyle = colorInput.value;
    context.lineWidth = Number(brushInput.value);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  });

  canvas.addEventListener("pointermove", (event) => {
    if (activePointer !== event.pointerId) return;
    const point = pointFromEvent(event);
    context.lineTo(point.x, point.y);
    context.strokeStyle = colorInput.value;
    context.lineWidth = Number(brushInput.value);
    context.stroke();
  });

  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);

  brushInput.addEventListener("input", () => {
    brushValue.value = brushInput.value;
    brushValue.textContent = brushInput.value;
  });

  undoButton.addEventListener("click", () => {
    if (!undoStack.length) return;
    redoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    context.putImageData(undoStack.pop(), 0, 0);
    updateHistoryControls();
    status.textContent = "Last stroke undone.";
  });

  redoButton.addEventListener("click", () => {
    if (!redoStack.length) return;
    undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
    context.putImageData(redoStack.pop(), 0, 0);
    updateHistoryControls();
    status.textContent = "Stroke restored.";
  });

  const clearCanvas = (announce = true) => {
    saveState();
    context.clearRect(0, 0, canvas.width, canvas.height);
    fillCanvas();
    if (announce) status.textContent = "Canvas cleared. Undo is available.";
  };

  clearButton.addEventListener("click", () => clearCanvas());

  const renderTimer = () => {
    timerOutput.value = String(timerRemaining);
    timerOutput.textContent = String(timerRemaining);
    timerProgress.value = timerRemaining;
  };

  const stopTimer = () => {
    window.clearInterval(timerInterval);
    timerInterval = null;
    timerToggle.textContent = "Resume timer";
  };

  const resetTimer = () => {
    window.clearInterval(timerInterval);
    timerInterval = null;
    timerRemaining = 60;
    timerToggle.textContent = "Start timer";
    renderTimer();
  };

  timerToggle.addEventListener("click", () => {
    if (timerInterval !== null) {
      stopTimer();
      status.textContent = "Demo timer paused.";
      return;
    }

    if (timerRemaining === 0) resetTimer();
    timerToggle.textContent = "Pause timer";
    timerInterval = window.setInterval(() => {
      timerRemaining = Math.max(0, timerRemaining - 1);
      renderTimer();
      if (timerRemaining === 0) {
        stopTimer();
        timerToggle.textContent = "Start timer";
        status.textContent = "Demo timer finished. Start again or reset it.";
      }
    }, 1000);
    status.textContent = "Demo timer started.";
  });

  timerReset.addEventListener("click", () => {
    resetTimer();
    status.textContent = "Demo timer reset to 60 seconds.";
  });

  resetDemoButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fillCanvas();
    undoStack.length = 0;
    redoStack.length = 0;
    updateHistoryControls();
    resetTimer();
    status.textContent = "Demo reset. Start with a fresh canvas and timer.";
  });

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  renderTimer();
})();
