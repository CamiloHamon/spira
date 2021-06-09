<h1>Sistema Academico - Prueba Spira</h1>

<br />
 
<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto
En este proyecto se hace un sistema de login con roles, en donde el administrador pueda crear estudiantes,
asignar materias y su intensidad horaria. Por otro lado, el usuario estudiante unicamente puede ver las
materias en las que esta inscrito. <br> Se hace uso de Angular para frontend y Nodejs para backend.

## Sistema de Jerarquia

![Jerarquia](https://github.com/CamiloHamon/spira/blob/main/jerarquia.png)
 
## Despliegue del Proyecto
Inicialmente se debe crear una base de datos en MySql, con los datos que tiene ``spira.sql``. El archivo de configuracion de la conexion a la base de datos, se encuentra en ``backend/src/database/keys.js``.

Para el despliegue del proyecto, se debe ubicar en la carpeta ``backend`` y ejecutar el comando:
<br>``npm install``
<br>Para despleagar el frontend, se debe ubicar en la carpeta ``frontend`` y ejecutar el comando:
<br>``npm install``
### Nota:
Este comando sirve para instalar todos los modulos empleados para la creacion del proyecto en el ``frontend`` y en el ``backend``.

## Credenciales
Las credenciales del usuario administrador son:
<br>
* correo: admin@admin.com
* pass: 123

Las credenciales de usuarios estudiantes, se pueden ver en ``http://localhost:4200/info-user/idUser`` para conocer el correo, y la contrasena es 123.
 
<!-- CONTACT -->
## Contact
 
[@camilohamon](https://github.com/camilohamon)<br />
 
Link del Proyecto: [Prueba Spira](https://github.com/CamiloHamon/spira)
