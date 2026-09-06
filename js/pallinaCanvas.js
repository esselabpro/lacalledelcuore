// ATTENZIONE PROPRIETA' PRIVATA LA CALLE DEL CUORE //

let mioCanvas = document.getElementById("canvas1");
let context = mioCanvas.getContext("2d");

let x = 150;
let y = 100;
let raggio = 40;
let velocitaX = 4;
let velocitaY = 3;
let ultimoTempo = performance.now();

function aggiorna(tempoAttuale) {
    context.clearRect(0, 0, mioCanvas.width, mioCanvas.height);
    let deltaTime = (tempoAttuale - ultimoTempo) / 16.66;
    ultimoTempo = tempoAttuale;

    if (deltaTime > 4) deltaTime = 4;

    context.beginPath();
    context.fillStyle = "rgba(0, 250, 0, 0.6)";
    context.arc(x, y, raggio, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();

    x += velocitaX * deltaTime;
    y += velocitaY * deltaTime;

    if (x + raggio >= mioCanvas.width || x - raggio <= 0) velocitaX = -velocitaX;
    if (y + raggio >= mioCanvas.height || y - raggio <= 0) velocitaY = -velocitaY;

    requestAnimationFrame(aggiorna);
}

requestAnimationFrame(aggiorna);