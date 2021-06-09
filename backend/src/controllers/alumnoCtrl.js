const alumnoModel = require('../models/alumnosModel');
const userLoginModel = require('../models/userLoginModel');
const userModel = require('../models/userModel');
const encryp = require('../helpers/encrypt');
const cursosModel = require('../models/cursosModel');

const alumnoCtrl = {};

alumnoCtrl.list = async (req, res, next) => {
	const alumnos = await alumnoModel.list();
	console.log(alumnos);
	if (alumnos.length > 0) {
		return res.json(alumnos);
	} else return res.json({});
};

alumnoCtrl.listById = async (req, res, next) => {
	const { id } = req.params;
	const alumno = await alumnoModel.listById(id);
	if (alumno.length > 0) {
		const cursos = await cursosModel.list(id);
		return res.json({ alumno: alumno[0], cursos });
	} else return res.status(201).json({ status: false });
};

alumnoCtrl.insertStudent = async (req, res, next) => {
	const { name, email, tel, pass } = req.body;

	const passSave = await encryp.encryptPassword(pass);
	const insertUserLogin = await userLoginModel.crear(email, passSave); //inserta el usuario nuevo
	const idUser = insertUserLogin.insertId;
	const insertUser = await userModel.crear(name, tel, idUser, 2); //es dos porque el administrador crea un usuario alumno

	if (insertUser) {
		const alumno = await alumnoModel.listById(idUser);
		return res.status(200).json(alumno);
	}
	return res.status(401).json({ status: false });
};

alumnoCtrl.update = async (req, res, next) => {
	const { id } = req.params;
	const searchAlumno = await alumnoModel.listById(id);

	if (searchAlumno.length > 0) {
		const { name, email, tel, pass } = req.body;
		const dataUpdate = {};

		if (name) {
			updateName(name, id);
			dataUpdate.name = name;
		}
		if (email) {
			updateEmail(email, id);
			dataUpdate.email = email;
		}
		if (tel) {
			updateTel(tel, id);
			dataUpdate.tel = tel;
		}
		if (pass) {
			updatePassword(pass, id);
			dataUpdate.pass = true;
		}

		if (dataUpdate) return res.status(201).json(dataUpdate);
	}

	return res.status(401).json({ status: false });
};

alumnoCtrl.delete = async (req, res, next) => {
	const { id } = req.params;
	const searchStudent = await alumnoModel.listById(id);
	if (searchStudent.length > 0) {
		const deleteUsr = await alumnoModel.delete(id);
		if (deleteUsr) return res.status(201).json(searchStudent);
	}
	return res.status(401).json({ status: false });
};

async function updateName(name, id) {
	return await alumnoModel.updateName(id, name);
}

async function updateEmail(email, id) {
	return await alumnoModel.updateEmail(id, email);
}

async function updateTel(tel, id) {
	return await alumnoModel.updateTel(id, tel);
}

async function updatePassword(pass, id) {
	const password = await encryp.encryptPassword(pass);
	return await alumnoModel.updatePassword(id, password);
}

module.exports = alumnoCtrl;
