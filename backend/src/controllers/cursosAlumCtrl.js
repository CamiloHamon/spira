const cursoModel = require('../models/cursoModel');
const cursosModel = require('../models/cursosModel');

const cursosAlumCtrl = {};

cursosAlumCtrl.list = async (req, res, next) => {
	const { id } = req.params;
	const cursos = await cursosModel.list(id);
	if (cursos.length > 0) {
		return res.json(cursos);
	} else return res.json({});
};

cursosAlumCtrl.listCursos = async (req, res, next) => {
	const cursos = await cursosModel.list(req.userId);
	if (cursos.length > 0) {
		return res.json(cursos);
	} else return res.json({});
};

cursosAlumCtrl.crear = async (req, res, next) => {
	const { id } = req.params;
	const { curso, horario } = req.body;
	const searchCurso = (await cursoModel.findCursoById(curso))[0];
	const searchHorario = (await cursoModel.findHorarioById(horario))[0];
	if (!searchCurso || !searchHorario)
		return res.status(401).json({ message: 'error' });
	const searchCursoDetails = (await cursoModel.findHrCurso(horario, curso))[0];
	let cursoAdd = '';
	if (!searchCursoDetails) {
		//se crea el curso
		const createCurso = await cursoModel.crear(horario, curso);
		cursoAdd = (await cursoModel.findById(createCurso.insertId))[0];
	} else cursoAdd = searchCursoDetails;

	const studentCurso = await cursoModel.findByIdStudentIdCurso(
		id,
		cursoAdd.idCurso
	);

	if (!studentCurso.length > 0) {
		const insert = await cursosModel.insert(cursoAdd.idCurso, id);
		cursoAdd = await cursoModel.findById(insert.insertId);
		return res.status(201).json(cursoAdd);
	} else return res.status(201).json({ message: 'ya tiene este curso' });
};

cursosAlumCtrl.listNombres = async (req, res, next) => {
	const cursos = await cursoModel.listNombres();
	if (cursos.length > 0) {
		return res.json(cursos);
	} else return res.status(201).json({ status: false });
};

cursosAlumCtrl.listHorarios = async (req, res, next) => {
	const horarios = await cursoModel.listHorarios();
	if (horarios.length > 0) {
		return res.json(horarios);
	} else return res.status(201).json({ status: false });
};

cursosAlumCtrl.update = async (req, res, next) => {
	const { idCurso } = req.body;
	const { id } = req.params;
	const searchCurso = await cursosModel.findById(id);
	if (searchCurso.length > 0) {
		const dataUpdate = {};

		if (idCurso) {
			const up = updateCurso(idCurso, id);
			if (up) dataUpdate.idCurso = idCurso;
		}
		if (dataUpdate) return res.status(201).json(dataUpdate);
	}

	return res.status(401).json({ status: false });
};

cursosAlumCtrl.delete = async (req, res, next) => {
	const { id } = req.params;
	const searchCurso = await cursosModel.findById(id);
	if (searchCurso.length > 0) {
		const deleteCurso = await cursosModel.delete(id);
		if (deleteCurso) return res.status(201).json(searchCurso);
	}
	return res.status(401).json({ status: false });
};

async function updateCurso(idCurso, id) {
	return await cursosModel.updateCurso(idCurso, id);
}

module.exports = cursosAlumCtrl;
