let backendConnectionUrl = "https://cityapp-demo-backend.onrender.com/v1/";
// let backendConnectionUrl = "http://localhost:3000/v1/";


export const createUser = async (dni, email, password) => {
	return await fetch(
		backendConnectionUrl + "/auth/register/",
		{
			method: "POST",
			mode: "cors",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
				dni: dni,
				email: email,
				password: password,
				role: "admin"
			}),
		}
	).then(response => {
		if (!response.ok) {
			return response.text().then(text => {throw new Error(text)});
		}
		return "Ok";
	}).catch(error => {
		return error.message;
	});
};

export const loginUser = async (email, password) => {
	return await fetch(
		backendConnectionUrl + "/auth/login/",
		{
			method: "POST",
			mode: "cors",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password
			}),
		}
	).then(response => {
		if (!response.ok) {
			return response.text().then(text => {throw new Error(text)});
		}
		return response.json();
	}).catch(error => {
		return error.message;
	});
};

export const createClaim = async (
		dniUsuarioLogueado,
		titulo,
		categoriaReclamo,
		imagenReclamo,
		direccion
	) => {
	return await fetch(
		backendConnectionUrl + "/claims/",
		{
			method: "POST",
			mode: "cors",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userDni: dniUsuarioLogueado,
				title: titulo,
				category: categoriaReclamo,
				dateLoaded: new Date(),
				imageUrl: imagenReclamo,
				address: direccion,
			}),
		}
	).then(response => {
		if (!response.ok) {
			return response.text().then(text => {throw new Error(text)});
		}
		return response.json();
	}).catch(error => {
		return error.message;
	});
};

export const getClaimsForUser = async (
		dniUsuarioLogueado
	) => {
	return await fetch(
		backendConnectionUrl + "/claims/" + dniUsuarioLogueado,
		{
			method: "GET",
			mode: "cors",
			headers: {
			"Content-Type": "application/json",
			}
		}
	).then(response => {
		if (!response.ok) {
			return response.text().then(text => {throw new Error(text)});
		}
		return response.json();
	}).catch(error => {
		return error.message;
	});
};
