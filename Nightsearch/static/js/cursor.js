// Mouse (cursor)
document.addEventListener("DOMContentLoaded", function () {
    // Other code
  
    createCustomCursor();
  });
  
  function createCustomCursor() {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
  
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX - 15}px`;
      cursor.style.top = `${event.clientY - 15}px`;
    });
  
    document.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
    });
  
    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });
  }

// Make cursor not go off screen
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const radius = cursor.offsetWidth / 2;
  const centerX = width / 2;
  const centerY = height / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const maxDistance = Math.min(centerX, centerY) - radius;
  const angle = Math.atan2(deltaY, deltaX);
  let posX = x - radius;
  let posY = y - radius;
  if (distance > maxDistance) {
    posX = centerX + Math.cos(angle) * maxDistance - radius;
    posY = centerY + Math.sin(angle) * maxDistance - radius;
  }
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
});
