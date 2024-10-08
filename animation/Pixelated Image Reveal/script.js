const img = document.getElementById('loadingImage');

setTimeout(() => {
    img.style.filter = 'blur(0)';
}, 3000);  // Transition time for the image to become clear

setTimeout(() => {
    document.querySelector('.loading-container').style.display = 'none';
}, 5000);  // Hide loader after 5 seconds
