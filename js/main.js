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

//VIDEO.

const video = document.querySelector("video");

setTimeout(() => {
  video.play();
}, 500);

// OPCIONES GALERIA PORTFOLIO

const categorias = document.querySelector(".categorias");
const proyectos = document.querySelectorAll(".card_proyecto");

// SECCION.offsetTop
// window.scrollY >= SECCION.offsetTop

function validar(event) {
  event.preventDefault();
  console.log("dentro...");
  let inputNombre = document.querySelector("#nombre").value;
  let inputEmail = document.querySelector("#email").value;
  let inputMensaje = document.querySelector("#mensaje").value;

  let regla =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputNombre == "" || inputEmail == "" || inputMensaje == "") {
    document.querySelector("#respuesta").innerHTML =
      "Debe rellenar todos los campos";
  } else if (!regla.test(inputEmail)) {
    document.querySelector("#respuesta").innerHTML = "Email no válido";
  } else {
    document.querySelector("#respuesta").innerHTML =
      "Formulario enviado con éxito";
    document.getElementById("formulario").submit();
  }
}
