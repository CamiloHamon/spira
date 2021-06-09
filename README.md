<h1>Estado Estable Cadenas de Markov</h1>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
  <img alt="Version" src="https://img.shields.io/badge/release-v1.0-blue">
</p>
 
<br />
 
<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto
En este proyecto se busca encontrar el estado estable de las cadenas de markov.<br />
Es necesario el estado inicial y la matriz de transicion.<br />
Se hace uso de HTML, css y Javascript.<br />
 
### Nota:
Tenga en cuenta que el programa esta pensado para ser escrito de forma horizontal, es decir que la suma de las filas debe dar 1.<br />
Tambien que el resultado de cada iteracion se aproxima a 3 decimales.
 
<!-- EXAMPLE -->
## Ejemplo
 
Partiendo que el numero de variables es 3.
 
### Matriz de Transicion
 
|               |       a       |       b       |       b       |
| ------------- | ------------- | ------------- | ------------- |
|       a       |       0       |      0.5      |      0.5      |
|       b       |     0.75      |       0       |     0.25      |
|       c       |       1       |       0       |       0       |
 
### Vector Estado Inicial
 
|       a       |       b       |       b       |
| ------------- | ------------- | ------------- |
|       0       |       1       |       0       |
 
### Resultado
 
|      Estado    |       a        |       b        |       c        |
|  ------------- |  ------------- | -------------  | -------------  |
|       E1       |      0.750     |     0.000      |     0.250      |
|       E2       |      0.250     |     0.375      |     0.375      |
|       E3       |      0.656     |     0.125      |     0.219      |
|       E4       |      0.313     |     0.328      |     0.359      |
|       E5       |      0.605     |     0.157      |     0.238      |
|       E6       |      0.356     |     0.302      |     0.342      |
|       E7       |      0.569     |     0.178      |     0.254      |
|      ...       |      ...       |      ...       |      ...       |
|      E31       |      0.471     |     0.234      |     0.293      |
|      E32       |      0.469     |     0.235      |     0.294      |
|      E33       |      0.470     |     0.234      |     0.293      |
|      E34       |      0.469     |     0.235      |     0.293      |
|      E35       |      0.469     |     0.234      |     0.293      |
| Estado Estable |      0.469     |     0.234      |     0.293      |
 
<!-- LICENSE -->
## License
 
Distribuido bajo la licencia MIT. Ver `LICENSE` para mas informacion.
 
<!-- CONTACT -->
## Contact
 
[@camilohamon](https://github.com/camilohamon)<br />
[@gabrielgt99](https://github.com/gabrielgt99)
 
Link del Proyecto: [Cadenas de Markov](https://github.com/gabrielgt99/Cadenas-de-Markov)