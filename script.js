const openMenuBtn = document.getElementById("hamburguer-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menuOverlay = document.getElementById("menu-overlay");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});
