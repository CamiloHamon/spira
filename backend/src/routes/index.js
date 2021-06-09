const { Router } = require('express');
const router = Router();

const authCtrl = require('../controllers/authCtrl');
const alumnoCtrl = require('../controllers/alumnoCtrl');
const cursoCtrl = require('../controllers/cursoCtrl');
const cursosAlumCtrl = require('../controllers/cursosAlumCtrl');

const authJwt = require('../middlewares/authJwt');

router.get('/', (req, res) => {
	res.send('Hellow World');
});

router.post('/signin', authCtrl.signin);

/**
 * CRUD alumno para el usuario administrador
 */

router.get(
	'/listStudents',
	authJwt.verifyToken,
	authJwt.isAdmin,
	alumnoCtrl.list
);

router.get('/student/:id', authJwt.verifyToken, alumnoCtrl.listById);

router.post('/student', authJwt.verifyToken, alumnoCtrl.insertStudent);

router.put('/updateStudent/:id', authJwt.verifyToken, alumnoCtrl.update);

router.delete('/deleteStudent/:id', authJwt.verifyToken, alumnoCtrl.delete);

/**
 * CRUD de cursos para el usuario administrador
 */
router.get('/cursos', authJwt.verifyToken, authJwt.isAdmin, cursoCtrl.list);

router.post('/crearCurso', authJwt.verifyToken, cursoCtrl.crear);

router.put('/curso/:id', authJwt.verifyToken, cursoCtrl.update);

router.delete('/deleteCurso/:id', authJwt.verifyToken, cursoCtrl.delete);

/**
 * CRUD asignar curso a usuario ya creado
 */
router.get('/cursosAlum/:id', authJwt.verifyToken, cursosAlumCtrl.list);

router.get('/cursosAlum', authJwt.verifyToken, cursosAlumCtrl.listCursos);

router.get('/cursos/all', authJwt.verifyToken, cursosAlumCtrl.listNombres);

router.get('/horarios', authJwt.verifyToken, cursosAlumCtrl.listHorarios);

router.post('/cursosAlum/:id', authJwt.verifyToken, cursosAlumCtrl.crear);

router.put('/cursosAlum/:id', authJwt.verifyToken, cursosAlumCtrl.update);

router.delete('/cursosAlum/:id', authJwt.verifyToken, cursosAlumCtrl.delete);
//

//router.get('/administrador', verifyToken, (req, res) => {});

//router.get('/mis-cursos', verifyToken, (req, res) => {});

module.exports = router;
