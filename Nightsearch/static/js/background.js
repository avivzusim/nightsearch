// Random background when you get in
function getRandomBackground() {
    const backgrounds = ['background.jpg', 'background2.jpg'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];

    document.getElementById('background-image').style.backgroundImage = `url('static/images/bg/${randomBackground}')`;
  }

  window.addEventListener('DOMContentLoaded', () => {
    getRandomBackground();
  });

// background taken from: https://unsplash.com/
// background 1 : https://unsplash.com/photos/62OK9xwVA0c
// background 2 : https://unsplash.com/photos/zepnJQycr4U