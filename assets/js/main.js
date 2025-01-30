document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("show");
  this.classList.toggle("active");
});

const carrusel = document.querySelector(".carrusel");
const clone = carrusel.innerHTML;
carrusel.innerHTML += clone;
