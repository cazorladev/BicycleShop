// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navMenu = document.querySelector(".nav-menu");

//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// });


document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

const carrusel = document.querySelector('.carrusel');
const clone = carrusel.innerHTML;
carrusel.innerHTML += clone;