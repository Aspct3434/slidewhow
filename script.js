let slideIndex = 0;
let slideInterval;

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const desc = document.getElementById('description');
const dotsContainer = document.getElementById('dots');
const slideshow = document.getElementById('slideshow');

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideIndex);
    dotsContainer.children[i].classList.toggle('active', i === slideIndex);
  });
  desc.textContent = slides[slideIndex].dataset.description;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function startAuto() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAuto() {
  clearInterval(slideInterval);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

slideshow.addEventListener('mouseenter', stopAuto);
slideshow.addEventListener('mouseleave', startAuto);

showSlide(0);
startAuto();
