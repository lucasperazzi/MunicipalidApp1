import {createClaim} from "./apiCalls.js";

// document.querySelector(".modal").modal('show');
// document.querySelector(".modal").style.display = "block";
let dniUsuarioLogueado = localStorage.getItem("loggedUserDni");
let form = document.getElementById("form");
let categoriasReclamo = document.getElementById("categoriasReclamo");
let inputFile = document.getElementById("imagenReclamo");
let btnObtenerUbicacion = document.getElementById("btnUbicacion");
let latitud;
let longitud;

let token = localStorage.getItem("token")
let btnInicio = document.getElementById("btnInicio")

if (token != undefined){
  btnInicio.addEventListener("click", () => {
    window.location.href = "./usuarioLogueado.html";
  })
} else {
    btnInicio.addEventListener("click", () => {
      window.location.href = "./index.html"
  })
}

btnObtenerUbicacion.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((e) => {
    latitud = e.coords.latitude;
    longitud = e.coords.longitude;
  });
  alert("Gracias, ahora usaremos tu ubicación actual para ubicar tu reclamo.");
});

try {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (latitud === undefined || longitud === undefined) {
      latitud = longitud = null;
    }
    let tituloReclamo = e.target.tituloReclamo.value;
    let categoriaReclamo = categoriasReclamo.value;
    let imagenReclamo;
    const reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.addEventListener("load", async (e) => {
      imagenReclamo = e.target.result;
      createClaim(
        dniUsuarioLogueado,
        tituloReclamo,
        categoriaReclamo,
        imagenReclamo,
        latitud + " - " + longitud
      ).then((response) => {
        if (response.claimId === undefined) {
          alert("Ocurrio un error");
        } else {
          alert("El reclamo fue creado correctamente");
          sessionStorage.setItem("ultimoReclamo", response.claimId);
          window.location.href = "./verReclamos.html";
        }
      });
    });
  });
} catch (error) {
  alert("Ups, ocurrio un error, intentelo nuevamente");
  console.log(error);
}
