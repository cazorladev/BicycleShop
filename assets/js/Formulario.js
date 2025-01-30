document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navegacion-principal");
  
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    // Cerrar el menú cuando se hace clic en un enlace
    document.querySelectorAll(".navegacion-principal a").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".life h2");
    const text = "Haz del camino\nTu mejor amigo";
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1).replace("\n", "<br>");
        index++;
        setTimeout(typeEffect, 100);
      }
    }
  
    textElement.innerHTML = "";
    typeEffect();
  });