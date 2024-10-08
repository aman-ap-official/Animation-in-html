const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('percentage').innerText = `${percent}%`;
}

let progress = 0;
const loadingInterval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(loadingInterval);
        document.querySelector('.loading-container').style.display = 'none';
    } else {
        progress += 2;
        setProgress(progress);
    }
}, 100);
