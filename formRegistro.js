import {createUser} from "./apiCalls.js"

let form = document.getElementById("register-form")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	let passOk;
	let emailUsuario = e.target.email.value;
	let dni = e.target.dni.value;
	if (e.target.password.value == e.target.password2.value)
	{
		passOk = e.target.password.value;
	} else {
		alert("Las contraseñas no son iguales");
		return;
	}
	createUser(dni, emailUsuario, passOk).then((response) => {
		if (response !== 'Ok') {
			response = JSON.parse(response);
			alert("Ocurrio un error: " + response.message)
		} else {
			alert("Usuario registrado correctamente")
			window.location.href = "./index.html";
		}
	});
})
