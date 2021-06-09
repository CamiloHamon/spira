const db = require('../database/connection');

const userLoginModel = {};

userLoginModel.crear = async (email, password) => {
	const userLCreado = await db.query(
		`INSERT INTO userlogin (idUserLogin, email, password) VALUES (NULL, '${email}', '${password}')`
	);

	return userLCreado;
};

userLoginModel.findByEmail = async (email) => {
	const user = await db.query(
		`SELECT * FROM userlogin WHERE email = '${email}'`
	);
	return user;
};

userLoginModel.findByIdl = async (id) => {
	const user = await db.query(
		`SELECT * FROM userlogin WHERE idUserLogin = '${id}'`
	);
	return user;
};

module.exports = userLoginModel;
