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
    const x = (event.clientX / window.innerWidth - 0.5) * 30; // Calculate x based on mouse position
    const y = (event.clientY / window.innerHeight - 0.5) * 30; // Calculate y based on mouse position
    animatedText.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Particle generation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 5; // Random size between 5 and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random fall duration

    // Optional color for particles
    particle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;

    document.querySelector('.particle-container').appendChild(particle);

    // Remove particle after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Generate particles every 150 milliseconds
setInterval(createParticle, 150);
