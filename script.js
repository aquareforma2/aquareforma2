AOS.init({ duration: 1000 });

// Carrusel simple
const galeria = document.querySelector('.galeria');
const prevBtn = document.querySelector('.btn-galeria.prev');
const nextBtn = document.querySelector('.btn-galeria.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  const total = galeria.children.length;
  if (index < total - 1) index++;
  else index = 0;
  galeria.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  const total = galeria.children.length;
  if (index > 0) index--;
  else index = total - 1;
  galeria.style.transform = `translateX(-${index * 100}%)`;
});

// Modal para ampliar imagen
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagen-ampliada');
const cerrar = document.querySelector('.cerrar');

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

cerrar.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
