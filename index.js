import {loginUser} from "./apiCalls.js"
let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailUsuario = e.target.email.value;
  let passUsuario = e.target.password.value;

  loginUser(emailUsuario, passUsuario).then((response) => {
    if (response.user === undefined) {
			response = JSON.parse(response);
			alert("Ocurrio un error: " + response.message)
		} else {
      localStorage.setItem("token", JSON.stringify(passUsuario));
      localStorage.setItem("loggedUserDni", JSON.stringify(response.user.dni));
      window.location.href = "./usuarioLogueado.html";
		}
  });
});
