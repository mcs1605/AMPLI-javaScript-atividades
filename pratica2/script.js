// CANVAS E CONTEXTO
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// ARRAY COM CIRCULOS
let circulos = [];

for (let i = 0; i < 1; i++) {
  circulos.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    raio: 30 + Math.random() * 10,
    dx: (Math.random() - 0.5) * 4,
    dy: (Math.random() - 0.5) * 4,
    cor: gerarCorAleatoria()
  });
}

// GERAR CORES (ALEATÓRIO)
function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// REALIZA ANIMAÇÃO
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let circulo of circulos) {
    // Atualiza posição
    circulo.x += circulo.dx;
    circulo.y += circulo.dy;

    // Colisão com bordas
    if (circulo.x + circulo.raio > canvas.width || circulo.x - circulo.raio < 0) {
      circulo.dx *= -1;
    }
    if (circulo.y + circulo.raio > canvas.height || circulo.y - circulo.raio < 0) {
      circulo.dy *= -1;
    }

    // Desenha o círculo
    ctx.beginPath();
    ctx.arc(circulo.x, circulo.y, circulo.raio, 0, Math.PI * 2);
    ctx.fillStyle = circulo.cor;
    ctx.fill();
    ctx.closePath();
  }

  requestAnimationFrame(animar);
}

// PARA MUDAR A COR DE CADA CÍRCULOS A CADA CLIQUE
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (let circulo of circulos) {
    const dx = mouseX - circulo.x;
    const dy = mouseY - circulo.y;
    if (Math.sqrt(dx * dx + dy * dy) < circulo.raio) {
      circulo.cor = gerarCorAleatoria();
    }
  }
});

// CHAMADA DA FUNÇÃO ANIMAR
animar();
