//MENÚ HAMBURGUESA

const hamburguerMenu = document.querySelector(".hamburguesa_png");

hamburguerMenu.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

//FLECHA TO TOP

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const video = document.querySelector("video");

setTimeout(() => {
  video.play();
}, 500);

// OPCIONES GALERIA PORTFOLIO

const categorias = document.querySelector(".categorias");
const proyectos = document.querySelectorAll(".card_proyecto");
