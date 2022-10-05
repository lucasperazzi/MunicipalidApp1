import {getClaimsForUser} from "./apiCalls.js";
import {mostrarReclamo} from "./reclamoUtil.js"
let divFormEnviado = document.getElementById("verReclamos");
let reclamos = await getClaimsForUser(localStorage.getItem("loggedUserDni"));

await reclamos.claims.map((reclamo) => {
  mostrarReclamo(reclamo, divFormEnviado);
});
