// Rain js
document.addEventListener("DOMContentLoaded", function () {
    // Other code
  
    createRain();
  });
  
  function createRain() {
    const rainContainer = document.getElementById("rain");
  
    for (let i = 0; i < 150; i++) {
      const drop = document.createElement("div");
      drop.classList.add("drop");
      drop.style.left = Math.random() * 100 + "vw";
      drop.style.animationDuration = Math.random() * 1 + 0.5 + "s";
      drop.style.animationDelay = Math.random() * 2 + "s";
      drop.style.opacity = Math.random() * 0.5 + 0.3;
      rainContainer.appendChild(drop);
    }
  }
  