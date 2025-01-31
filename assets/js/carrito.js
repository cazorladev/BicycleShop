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
 
let cart = [];
 
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout");
const totalElement = document.getElementById("total");
const purchaseModal = document.getElementById("purchase-modal");
const closePurchase = document.getElementById("close-purchase");
 
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const productCard = button.closest(".card-product");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("$", ""));
        const product = {name: productName, price: productPrice};
        cart.push(product);
        updateCartCount();
        saveCart();
        updateTotal();
    });
});
 
function updateCartCount() {
    cartCount.textContent = cart.length;
}
 
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
 
function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}
 
function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent =`Total: $${total}`;
}
 
document.getElementById("cart-icon").addEventListener("click", function() {
    cartModal.style.display = "flex";
    displayCart();
    updateTotal();
});
 
closeCart.addEventListener("click", function() {
    cartModal.style.display = "none";
});
 
checkoutButton.addEventListener("click", function() {
    purchaseModal.style.display = "flex";
    cart = [];
    updateCartCount();
    saveCart();
    updateTotal();
    cartModal.style.display ="none"
});
 
closePurchase.addEventListener("click", function() {
    purchaseModal.style.display = "none";
});
 
function loadCart() {
    const saveCart = localStorage.getItem("cart");
    if(saveCart) {
        cart = JSON.parse(saveCart);
        updateCartCount();
        updateTotal();
    }
}
 
loadCart();

// Selecciona el botón por su ID  const checkoutButton = document.getElementById('checkout');

// Agrega un evento de clic al botón
checkoutButton.addEventListener('click', function() {
  // Redirige a la página del formulario
  window.location.href = '/formulario.html';
});