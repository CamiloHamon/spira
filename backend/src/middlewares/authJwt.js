const userLoginModel = require('../models/userLoginModel');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const authJwt = {};

authJwt.verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['authorization'].split(' ')[1];

		if (!token) return res.status(403).json({ message: 'No token provided' });
		const decoded = jwt.verify(token, 'secretKey');

		req.userId = decoded._id;
		const user = (await userLoginModel.findByIdl(decoded._id))[0];

		if (!user) return res.status(404).json({ message: 'no user found' });

		next();
	} catch (error) {
		return res.status(400).json({ message: 'unauthorize' });
	}
};

authJwt.isAdmin = async (req, res, next) => {
	const user = (await userModel.findById(req.userId))[0];

	if (user.rol_idRol === 1) {
		next();
		return;
	}

	return res.status(403).json({ message: 'Require Admin' });
};

module.exports = authJwt;
