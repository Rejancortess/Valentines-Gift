
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const openGiftButton = document.querySelector("#open-gift");
  const landingNote = document.querySelector("#landing-note");
  const landingPassword = document.querySelector("#landing-password");
  const passwordInput = document.querySelector("#gift-password");
  const submitPassword = document.querySelector("#submit-password");
  const giftBg = document.querySelector(".gift-bg");
  let stickersAdded = false;
  if (openGiftButton) {
    openGiftButton.addEventListener("click", () => {
      if (landingNote) {
        landingNote.textContent = "Ask Rejan for the password to open the gift.";
      }
      if (landingPassword) {
        landingPassword.classList.add("is-visible");
        landingPassword.setAttribute("aria-hidden", "false");
      }
      openGiftButton.textContent = "Enter password";
    });
  }

  if (submitPassword && passwordInput) {
    submitPassword.addEventListener("click", () => {
      const value = passwordInput.value.trim();
      if (value === "mwamwa") {
        document.body.classList.remove("landing");
        if (giftBg && !stickersAdded) {
          const imageUrl = "https://media1.tenor.com/m/EqEGS0cSfNUAAAAC/mwah-cat-rose.gif";
          const stickerCount = 10;

          for (let i = 0; i < stickerCount; i += 1) {
            const sticker = document.createElement("img");
            sticker.className = "gift-sticker";
            sticker.src = imageUrl;
            sticker.alt = "";
            sticker.loading = "lazy";

            const size = `${rand(14, 22)}vmin`;
            const duration = `${rand(14, 26)}s`;
            const delay = `${rand(-26, 0)}s`;
            const drift = `${rand(-18, 18)}vw`;

            sticker.style.setProperty("--size", size);
            sticker.style.setProperty("--x", `${rand(0, 100)}vw`);
            sticker.style.setProperty("--duration", duration);
            sticker.style.setProperty("--delay", delay);
            sticker.style.setProperty("--drift", drift);
            sticker.style.setProperty("--rotate", `${rand(-18, 18)}deg`);

            giftBg.appendChild(sticker);
          }

          stickersAdded = true;
        }
      } else if (landingNote) {
        landingNote.textContent = "Wrong password. Ask Rejan again.";
      }
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