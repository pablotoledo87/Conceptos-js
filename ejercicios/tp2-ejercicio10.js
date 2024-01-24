const filas = parseInt(prompt("Ingrese un numero de filas: "));
const columnas = parseInt(prompt("Ingrese un numero de columnas: "));

const totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for(let indiceFilas = 0;indiceFilas < filas;indiceFilas ++ ){
    document.write(`
    <tr>
        <td>33</td>
        <td>34</td>
        <td>35</td>
    </tr>`);
}
document.write(`</tbody></table>`);

