const db = require('../database/connection');

const alumnosModel = {};

alumnosModel.list = async () => {
	const alumnos = db.query(
		`SELECT ROW_NUMBER() OVER(ORDER BY u.idUser) no, u.idUser, u.nombre, u.telefono, ul.email FROM user u INNER JOIN userlogin ul ON u.userLogin_idUserLogin = ul.idUserLogin WHERE rol_idRol != 1`
	);
	return alumnos;
};

alumnosModel.listById = async (id) => {
	const alumnos = db.query(
		`SELECT u.idUser, u.nombre, u.telefono, ul.email FROM user u INNER JOIN userlogin ul ON u.userLogin_idUserLogin = ul.idUserLogin WHERE u.rol_idRol != 1 AND u.idUser = ${id}`
	);
	return alumnos;
};

alumnosModel.insertStudent = async () => {
	const alumnos = db.query(
		`SELECT * FROM user WHERE rol_idRol != 1 AND idUser = ${id}`
	);
	return alumnos;
};

alumnosModel.updateName = async (idStudent, name) => {
	let result = false;

	try {
		await db.query(
			`UPDATE user SET nombre = '${name}' WHERE user.idUser = ${idStudent}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

alumnosModel.updateEmail = async (idStudent, email) => {
	let result = false;

	try {
		await db.query(
			`UPDATE userlogin SET email = '${email}' WHERE userlogin.idUserLogin = ${idStudent}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

alumnosModel.updateTel = async (idStudent, tel) => {
	let result = false;

	try {
		await db.query(
			`UPDATE user SET telefono = '${tel}' WHERE user.idUser = ${idStudent}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

alumnosModel.updatePassword = async (idStudent, pass) => {
	let result = false;

	try {
		await db.query(
			`UPDATE userlogin SET password = '${pass}' WHERE userlogin.idUserLogin = ${idStudent}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

alumnosModel.delete = async (idStudent) => {
	let result = false;
	try {
		await db.query(`DELETE FROM user WHERE user.idUser = ${idStudent}`);
		await db.query(
			`DELETE FROM userlogin WHERE userlogin.idUserLogin = ${idStudent}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

module.exports = alumnosModel;
