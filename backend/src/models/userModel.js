const db = require('../database/connection');

const userModel = {};

userModel.crear = async (nombre, telefono, idUserLogin, idRol) => {
	const userCreado = await db.query(
		`INSERT INTO user (idUser, nombre, telefono, userLogin_idUserLogin, rol_idRol) VALUES (NULL, '${nombre}', ${telefono}, '${idUserLogin}', '${idRol}')`
	);

	return userCreado;
};

userModel.findById = async (id) => {
	const user = await db.query(`SELECT * FROM user WHERE idUser = '${id}'`);
	return user;
};

module.exports = userModel;
