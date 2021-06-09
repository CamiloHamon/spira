const cursoModel = require('../models/cursoModel');

const cursosCtrl = {};

cursosCtrl.list = async (req, res, next) => {
	const cursos = await cursoModel.list();
	if (cursos.length > 0) {
		return res.json(cursos);
	} else return res.json({});
};

cursosCtrl.listById = async (req, res, next) => {
	const { id } = req.params;
	const curso = await cursoModel.findById(id);
	if (curso.length > 0) {
		return res.json(curso[0]);
	} else return res.status(201).json({ status: false });
};

cursosCtrl.crear = async (req, res, next) => {
	const { intHoraria, nombreCurso } = req.body;
	const searchIntHo = (await cursoModel.findInHoraria(intHoraria))[0];
	if (searchIntHo) {
		const searchNombre = (await cursoModel.findDetalle(nombreCurso))[0];
		if (searchNombre) {
			const insert = await cursoModel.insert(
				searchIntHo.idIntHoraria,
				searchNombre.iddetalleCurso
			);
			const cursoCreado = await cursoModel.findById(insert.insertId);
			if (insert) return res.status(201).json(cursoCreado);
		}
	}

	return res.status(401).json({});
};

cursosCtrl.update = async (req, res, next) => {
	const { intHoraria, nombreCurso } = req.body;
	const { id } = req.params;
	const searchCurso = await cursoModel.findById(id);
	if (searchCurso.length > 0) {
		const dataUpdate = {};

		if (intHoraria) {
			updateInHoraria(intHoraria, id);
			dataUpdate.intHoraria = intHoraria;
		}

		if (nombreCurso) {
			updateNombreCurso(nombreCurso, id);
			dataUpdate.nombreCurso = nombreCurso;
		}

		if (dataUpdate) return res.status(201).json(dataUpdate);
	}

	return res.status(401).json({ status: false });
};

cursosCtrl.delete = async (req, res, next) => {
	const { id } = req.params;
	const searchCurso = await cursoModel.findById(id);
	if (searchCurso.length > 0) {
		const deleteUsr = await cursoModel.delete(id);
		if (deleteUsr) return res.status(201).json(searchCurso);
	}
	return res.status(401).json({ status: false });
};

async function updateInHoraria(nintHorariaame, id) {
	return await cursoModel.updateIntHoraria(id, nintHorariaame);
}

async function updateNombreCurso(nombreCurso, id) {
	return await cursoModel.updateNombreCu(id, nombreCurso);
}

module.exports = cursosCtrl;
