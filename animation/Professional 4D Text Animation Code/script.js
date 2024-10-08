const animatedText = document.querySelector('.animated-text');

// Change color periodically
const colors = ["#ff4081", "#3f51b5", "#ffeb3b", "#4caf50", "#ff9800"];
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    animatedText.style.color = colors[colorIndex];
}, 2000); // Change color every two seconds

// Add mouse movement effect
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 15; // Calculate x based on mouse position
    const y = (event.clientY / window.innerHeight - 0.5) * 15; // Calculate y based on mouse position
    animatedText.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Particle generation with smooth movement
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 5; // Random size between 5 and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random fall duration
    particle.style.animationDelay = `${Math.random() * 5}s`; // Random delay

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

// Add click interaction to text
animatedText.addEventListener('click', () => {
    animatedText.style.transform = 'scale(1.5) rotateY(360deg) rotateX(360deg)';
    setTimeout(() => {
        animatedText.style.transform = ''; // Reset transform after animation
    }, 1000);
});
