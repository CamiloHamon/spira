const db = require('../database/connection');

const cursoModel = {};

cursoModel.list = async () => {
	const cursos = await db.query(
		'SELECT dc.nombre, ih.hInicio, ih.hFin FROM curso c INNER JOIN detallecurso dc ON c.detalleCurso_iddetalleCurso = dc.iddetalleCurso INNER JOIN inthoraria ih ON c.intHoraria_idIntHoraria = ih.idIntHoraria'
	);
	return cursos;
};

cursoModel.listNombres = async () => {
	const cursos = await db.query('SELECT * FROM detallecurso');
	return cursos;
};

cursoModel.findCursoById = async (id) => {
	const cursos = await db.query(
		`SELECT * FROM detallecurso where iddetallecurso = ${id}`
	);
	return cursos;
};

cursoModel.listHorarios = async () => {
	const cursos = await db.query('SELECT * FROM inthoraria');
	return cursos;
};

cursoModel.findHorarioById = async (id) => {
	const cursos = await db.query(
		`SELECT * FROM inthoraria where idinthoraria = ${id}`
	);
	return cursos;
};

cursoModel.findHrCurso = async (idInth, idDetalle) => {
	const cursos = await db.query(
		`SELECT * FROM curso where intHoraria_idIntHoraria = ${idInth} and detalleCurso_iddetalleCurso = ${idDetalle}`
	);
	return cursos;
};

cursoModel.findById = async (idCurso) => {
	const cursos = await db.query(
		`SELECT c.idCurso, dc.nombre, ih.hInicio, ih.hFin FROM curso c INNER JOIN detallecurso dc ON c.detalleCurso_iddetalleCurso = dc.iddetalleCurso INNER JOIN inthoraria ih ON c.intHoraria_idIntHoraria = ih.idIntHoraria WHERE c.idCurso = ${idCurso}`
	);
	return cursos;
};

cursoModel.crear = async (intHoraria, nombreCurso) => {
	let result = false;

	try {
		result = await db.query(
			`INSERT INTO curso (idCurso, intHoraria_idIntHoraria, detalleCurso_iddetalleCurso) VALUES (NULL, '${intHoraria}', '${nombreCurso}')`
		);
	} catch (error) {
		console.log(error);
	}

	return result;
};

cursoModel.findInHoraria = async (id) => {
	const intHoraria = await db.query(
		`SELECT * FROM inthoraria WHERE idIntHoraria = ${id}`
	);
	return intHoraria;
};

cursoModel.findDetalle = async (id) => {
	const intHoraria = await db.query(
		`SELECT * FROM detallecurso WHERE iddetalleCurso = ${id}`
	);
	return intHoraria;
};

cursoModel.insert = async (idInth, idDetalle) => {
	let result = null;

	try {
		result = await db.query(
			`INSERT INTO curso (idCurso, intHoraria_idIntHoraria, detalleCurso_iddetalleCurso) VALUES (NULL, '${idInth}', '${idDetalle}')`
		);
	} catch (error) {
		console.log(error);
	}
	return result;
};

cursoModel.updateIntHoraria = async (idCurso, intH) => {
	let result = false;

	try {
		await db.query(
			`UPDATE curso SET intHoraria_idIntHoraria = '${intH}' WHERE curso.idCurso = ${idCurso}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

cursoModel.updateNombreCu = async (idCurso, nombre) => {
	let result = false;

	try {
		await db.query(
			`UPDATE curso SET detalleCurso_iddetalleCurso = '${nombre}' WHERE curso.idCurso = ${idCurso}`
		);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

cursoModel.findByIdStudentIdCurso = async (idStudent, idCurso) => {
	const curso = await db.query(
		`SELECT * FROM cursos WHERE curso_idCurso = ${idCurso} and user_idUser = ${idStudent}`
	);
	return curso;
};

cursoModel.delete = async (idCurso) => {
	let result = false;
	try {
		await db.query(`DELETE FROM curso WHERE curso.idCurso = ${idCurso}`);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

module.exports = cursoModel;
