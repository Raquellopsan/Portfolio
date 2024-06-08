const hamburguerMenu = document.querySelector(".hamburguesa_png");

hamburguerMenu.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
