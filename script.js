// Starfield Animation
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();

// Section Reveal Animation
const elements = document.querySelectorAll('.section, .hero-text, .hero-subtext');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
elements.forEach(el => observer.observe(el));

// Parallax Scroll
window.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.parallax-layer');
  const scrollTop = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollTop * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });

  const contentLayers = document.querySelectorAll('.parallax-content');
  contentLayers.forEach(layer => {
    const speed = layer.getAttribute('data-speed') || 0.05;
    const yPos = scrollTop * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
});

// Join Form
document.getElementById("join-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for joining the BrahmandX mission! We'll contact you soon.");
  this.reset();
});
