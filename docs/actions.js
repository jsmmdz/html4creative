// Secuencia de imágenes en loop SIN transición ni gradiente
const interval = 100; // ms
const imagenDivs = document.querySelectorAll('#animation\\ container .imagen img, #animation.container .imagen img, #animation-container .imagen img');
let currentFrame = 0;

function showFrame(frame) {
    imagenDivs.forEach((img, idx) => {
        img.style.transition = '';
        img.style.opacity = 1;
        img.style.display = idx === frame ? 'block' : 'none';
    });
}

function nextFrame() {
    showFrame(currentFrame);
    currentFrame = (currentFrame + 1) % imagenDivs.length;
}

if (imagenDivs.length > 0) {
    imagenDivs.forEach((img, idx) => {
        img.style.display = idx === 0 ? 'block' : 'none';
        img.style.opacity = 1;
        img.style.transition = '';
    });
    setInterval(nextFrame, interval);
    showFrame(0);
}
