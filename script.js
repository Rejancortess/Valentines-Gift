
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const openGiftButton = document.querySelector("#open-gift");
  if (openGiftButton) {
    openGiftButton.addEventListener("click", () => {
      document.body.classList.remove("landing");
    });
  }

  const petalContainer = document.querySelector(".petal-rain");
  const rand = (min, max) => Math.random() * (max - min) + min;

  if (petalContainer) {
    const petalCount = 30;

    for (let i = 0; i < petalCount; i += 1) {
      const petal = document.createElement("span");
      const isRed = Math.random() < 0.35;
      petal.className = isRed ? "petal petal--red" : "petal";

      const size = rand(1.2, 3.2);
      const duration = rand(10, 18);
      const delay = rand(-18, 0);
      const drift = `${rand(-18, 18)}vw`;

      petal.style.setProperty("--x", `${rand(0, 100)}vw`);
      petal.style.setProperty("--size", `${size}vmin`);
      petal.style.setProperty("--duration", `${duration}s`);
      petal.style.setProperty("--delay", `${delay}s`);
      petal.style.setProperty("--drift", drift);

      petalContainer.appendChild(petal);
    }
  }

  const heartContainer = document.querySelector(".heart-rain");
  if (!heartContainer) {
    return;
  }

  const heartCount = 18;
  const heartColors = ["#ff6fae", "#ffd1e8", "#ff3b4f", "#ff9aa8"];

  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";

    const size = rand(1.6, 3.6);
    const duration = rand(12, 22);
    const delay = rand(-22, 0);
    const drift = `${rand(-20, 20)}vw`;

    const color = heartColors[Math.floor(rand(0, heartColors.length))];

    heart.style.setProperty("--x", `${rand(0, 100)}vw`);
    heart.style.setProperty("--size", `${size}vmin`);
    heart.style.setProperty("--duration", `${duration}s`);
    heart.style.setProperty("--delay", `${delay}s`);
    heart.style.setProperty("--drift", drift);
    heart.style.setProperty("--heart-color", color);

    heartContainer.appendChild(heart);
  }
};