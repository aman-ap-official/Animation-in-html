const animatedText = document.querySelector('.animated-text');

// Change color periodically
const colors = ["#ff4081", "#3f51b5", "#ffeb3b", "#4caf50", "#ff9800"];
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    animatedText.style.color = colors[colorIndex];
}, 1000); // Change color every second

// Add mouse movement effect
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 50; // Calculate x based on mouse position
    const y = (event.clientY / window.innerHeight - 0.5) * 50; // Calculate y based on mouse position
    animatedText.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
