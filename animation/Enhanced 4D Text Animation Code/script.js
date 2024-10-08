const textElement = document.querySelector('.animated-text');

// Change color periodically
const colors = ["#ff4081", "#3f51b5", "#ffeb3b", "#4caf50", "#ff9800"];
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    textElement.style.color = colors[colorIndex];
}, 1000); // Change color every second
