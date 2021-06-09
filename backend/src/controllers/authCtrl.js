const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const userLoginModel = require('../models/userLoginModel');
const encryp = require('../helpers/encrypt');

const authCtrl = {};

authCtrl.signin = async (req, res, next) => {
	const { email, pass } = req.body;
	const user = (await userLoginModel.findByEmail(email))[0];
	if (!user) {
		console.log('El correo no existe');
		return res.status(401).json({ message: 'El correo no existe' });
	}

	const findRol = (await userModel.findById(user.idUserLogin))[0];

	const valPass = await encryp.matchPassword(pass, user.password);
	if (!valPass) {
		console.log('Contrasena incorrecta');
		return res.status(401).json({ message: 'Contrasena incorrecta' });
	}

	const token = jwt.sign({ _id: user.idUserLogin }, 'secretKey');
	return res.status(200).json({ token, rol: findRol.rol_idRol });
};

module.exports = authCtrl;
