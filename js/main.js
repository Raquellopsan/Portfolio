//MENÚ HAMBURGUESA

const hamburguerMenu = document.querySelector(".hamburguesa_png");

hamburguerMenu.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

//FLECHA TO TOP

const toTop = document.querySelector(".to-top");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const footerPosition = footer.offsetTop;
  const windowHeight = window.innerHeight;

  if (window.scrollY > 150 && scrollPosition + windowHeight < footerPosition) {
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

// FILTRADO GALERIA

const categorias = document.querySelector(".categorias");
const proyectos = document.querySelectorAll(".card_proyecto");

categorias.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-items")) {
    categorias.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    proyectos.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue == "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

//VALIDACION FORMULARIO

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
