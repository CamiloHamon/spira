const db = require('../database/connection');

const cursosModel = {};

cursosModel.list = async (idStudent) => {
	const cursos = await db.query(
		`SELECT ROW_NUMBER() OVER(ORDER BY cs.idCursos) no, cs.idCursos, dc.nombre, ih.hInicio, ih.hFin FROM cursos cs INNER JOIN curso c ON cs.curso_idCurso = c.idCurso INNER JOIN detallecurso dc ON c.detalleCurso_iddetalleCurso = dc.iddetalleCurso INNER JOIN inthoraria ih ON c.intHoraria_idIntHoraria = ih.idIntHoraria WHERE cs.user_idUser = ${idStudent}`
	);
	return cursos;
};

cursosModel.findById = async (idCurso) => {
	const cursos = await db.query(
		`SELECT cs.idCursos, dc.nombre, ih.hInicio, ih.hFin FROM cursos cs INNER JOIN curso c ON cs.curso_idCurso = c.idCurso INNER JOIN detallecurso dc ON c.detalleCurso_iddetalleCurso = dc.iddetalleCurso INNER JOIN inthoraria ih ON c.intHoraria_idIntHoraria = ih.idIntHoraria WHERE cs.idCursos = ${idCurso}`
	);
	return cursos;
};

cursosModel.insert = async (idCurso, idStudent) => {
	let result = null;

	try {
		result = await db.query(
			`INSERT INTO cursos (idCursos, curso_idCurso, user_idUser) VALUES (NULL, '${idCurso}', '${idStudent}')`
		);
	} catch (error) {
		console.log(error);
	}

	return result;
};

cursosModel.updateCurso = async (idCurso, idCursos) => {
	let result = false;

	try {
		await db.query(
			`UPDATE cursos SET curso_idCurso = '${idCurso}' WHERE cursos.idCursos = ${idCursos}`
		);
		result = true;
	} catch (error) {}

	return result;
};

cursosModel.delete = async (idCurso) => {
	let result = false;
	try {
		await db.query(`DELETE FROM cursos WHERE cursos.idCursos = ${idCurso}`);
		result = true;
	} catch (error) {
		console.log(error);
	}

	return result;
};

module.exports = cursosModel;
