const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');

const conexion = mysql.createConnection(database);

conexion.connect((error) => {
	if (error) throw error;
	else console.log('BASE DE DATOS CONECTADA');
});

conexion.query = promisify(conexion.query);

module.exports = conexion;
