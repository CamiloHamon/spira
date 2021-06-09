-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2021 a las 01:36:49
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spira`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `intHoraria_idIntHoraria` int(11) NOT NULL,
  `detalleCurso_iddetalleCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`idCurso`, `intHoraria_idIntHoraria`, `detalleCurso_iddetalleCurso`) VALUES
(15, 1, 1),
(16, 2, 2),
(17, 1, 2),
(18, 2, 1),
(19, 3, 1),
(20, 3, 2),
(21, 1, 3),
(22, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idCursos` int(11) NOT NULL,
  `curso_idCurso` int(11) NOT NULL,
  `user_idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`idCursos`, `curso_idCurso`, `user_idUser`) VALUES
(27, 15, 5),
(44, 15, 7),
(45, 21, 8),
(46, 22, 1),
(49, 15, 1),
(50, 21, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallecurso`
--

CREATE TABLE `detallecurso` (
  `iddetalleCurso` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detallecurso`
--

INSERT INTO `detallecurso` (`iddetalleCurso`, `nombre`) VALUES
(1, 'Matemáticas Discretas'),
(2, 'Programacion - PHP'),
(3, 'Ingles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inthoraria`
--

CREATE TABLE `inthoraria` (
  `idIntHoraria` int(11) NOT NULL,
  `hInicio` time NOT NULL,
  `hFin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `inthoraria`
--

INSERT INTO `inthoraria` (`idIntHoraria`, `hInicio`, `hFin`) VALUES
(1, '06:00:00', '08:00:00'),
(2, '08:00:00', '10:00:00'),
(3, '10:00:00', '08:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombre`) VALUES
(1, 'administrador'),
(2, 'alumno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(11) DEFAULT NULL,
  `userLogin_idUserLogin` int(11) NOT NULL,
  `rol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `nombre`, `telefono`, `userLogin_idUserLogin`, `rol_idRol`) VALUES
(1, 'Camilo', '3215723910', 1, 2),
(2, 'Julio', '3232390842', 2, 1),
(4, 'Camilo Hamon', '3232390842', 4, 2),
(5, 'Sandra Serna', '3204452508', 5, 2),
(6, 'Jhon', '3190099991', 6, 2),
(7, 'Lidia', '321000000', 7, 2),
(8, 'Carlos', '3105723900', 8, 2),
(9, 'Ivan', '3232390842', 9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userlogin`
--

CREATE TABLE `userlogin` (
  `idUserLogin` int(11) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `userlogin`
--

INSERT INTO `userlogin` (`idUserLogin`, `email`, `password`) VALUES
(1, 'prueba@prueba.com', '$2a$10$qv2WMAjPcKsKMDPzVG06ieziXyf0lxZ2WmQBw3MDJFoKHUHNfEMyq'),
(2, 'admin@admin.com', '$2a$10$qv2WMAjPcKsKMDPzVG06ieziXyf0lxZ2WmQBw3MDJFoKHUHNfEMyq'),
(4, 'camilohamon@gmail.com', '$2a$10$ujyVfh2K2GjVA4/cwM9egeeUgphJvXT2vQYGg1kGwGVgJWuxYkg6a'),
(5, 'sandraserna@gmail.com', '$2a$10$wWUisltAFKNsM.bA1ciszeuzn7ZZA4il7SqEK2/Wu4Tw/y9gNzWAq'),
(6, 'jhon@gmail.com', '$2a$10$hDtJKJC7eeZ6KaNcyyU9y.f/j69y7GyYPz5.jQyQ938CKB72uB1ga'),
(7, 'lidia@gmail.com', '$2a$10$lkjrfDYN8v5qwLsj2xGq/OuXMQi.ev.8GCakPU3AdfPfB6qVbIb/C'),
(8, 'carlos@gmail.com', '$2a$10$yBSY/APpGnTPP2/GqG6VY.qdN9hoEv/BbalgrWTvgvGPkrMb7kPwS'),
(9, 'ivan@gmail.com', '$2a$10$phconDG9PuCs/xfGWc1NFeiWRHlRR02m9YXhOn7tGJ3JyPcU9I/Ne');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`),
  ADD KEY `fk_curso_intHoraria1` (`intHoraria_idIntHoraria`),
  ADD KEY `fk_curso_detalleCurso1` (`detalleCurso_iddetalleCurso`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idCursos`),
  ADD KEY `fk_cursos_curso1` (`curso_idCurso`),
  ADD KEY `fk_cursos_user1` (`user_idUser`);

--
-- Indices de la tabla `detallecurso`
--
ALTER TABLE `detallecurso`
  ADD PRIMARY KEY (`iddetalleCurso`);

--
-- Indices de la tabla `inthoraria`
--
ALTER TABLE `inthoraria`
  ADD PRIMARY KEY (`idIntHoraria`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `fk_user_userLogin` (`userLogin_idUserLogin`),
  ADD KEY `fk_user_rol1` (`rol_idRol`);

--
-- Indices de la tabla `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`idUserLogin`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `idCursos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `detallecurso`
--
ALTER TABLE `detallecurso`
  MODIFY `iddetalleCurso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `inthoraria`
--
ALTER TABLE `inthoraria`
  MODIFY `idIntHoraria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `idUserLogin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `fk_curso_detalleCurso1` FOREIGN KEY (`detalleCurso_iddetalleCurso`) REFERENCES `detallecurso` (`iddetalleCurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_curso_intHoraria1` FOREIGN KEY (`intHoraria_idIntHoraria`) REFERENCES `inthoraria` (`idIntHoraria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `fk_cursos_curso1` FOREIGN KEY (`curso_idCurso`) REFERENCES `curso` (`idCurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cursos_user1` FOREIGN KEY (`user_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_rol1` FOREIGN KEY (`rol_idRol`) REFERENCES `rol` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_userLogin` FOREIGN KEY (`userLogin_idUserLogin`) REFERENCES `userlogin` (`idUserLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
