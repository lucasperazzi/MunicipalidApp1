export const mostrarReclamo = (reclamo, divFormEnviado) => {
  let idUltimoReclamo = sessionStorage.getItem("ultimoReclamo");
    if (reclamo.claimId == idUltimoReclamo) {
      let latitud = reclamo.address.substring(0, reclamo.address.indexOf(" - "));
      let longitud = reclamo.address.substring(reclamo.address.indexOf(" - ") + 2);
      let div = document.createElement("div");
      div.innerHTML = `

      <div class="divReclamo">

      <h2>¡Perfecto! Ya tenemos tu reclamo</h2>

      <h4> Título de reclamo: <br> ${reclamo.title}</h4>

      <h5> Tu reclamo ya ha sido dirigido al área de: <br> ${reclamo.category}</h5>

      <h4>¡Gracias por tu imagen para ayudarnos!</h4>
      <embed src="${reclamo.imageUrl}" width="250" height="350" />


      <h4> Trabajaremos en la siguiente ubicación: <br> latitud: ${latitud} y longitud: ${longitud}</h4>

      <button type="button" id="btnFinalizarReclamo"> Finalizar Reclamo </button>
      </div>


      `;

      divFormEnviado.appendChild(div);

      let btnFinalizarReclamo = document.getElementById("btnFinalizarReclamo")
      btnFinalizarReclamo.addEventListener("click", () => {
        window.location.href = "./usuarioLogueado.html";
        sessionStorage.clear()
    })
  }
}
