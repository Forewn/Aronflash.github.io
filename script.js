

// let n_factor = prompt('numero de factores');
let n_alter = prompt('numero de alternativas');


let input = prompt("Ingrese los puntajes del factor a evaluar separados por ,");

let lista = input.split(",").map(num => parseInt(num.trim()));


document.getElementById('nc').value = n_alter;
document.querySelectorAll('button')[0].click();
let valores = document.querySelectorAll('#matriz-input input');

write_data(lista, valores);



// Esta funcion sera la encargada de ingresar los puntajes en la matriz a revisar
function write_data(lista, valores){
    // contador de posicion total (recordemos que en pantalla se reinicia al final de cada fila, pero en un arreglo real se sigue el conteo linealmente)
    let cont = 0;
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista.length; j++){
            if(lista[i] >= lista[j]){
                // Este es el criterio de puntajes, se basa en el valor absoluto de la diferencia entre los valores + 1
                valores[cont].value = `${Math.abs(lista[i]-lista[j]) + 1}`
            }
            else{
                valores[cont].value = `1/${Math.abs(lista[i]-lista[j]) + 1}`
            }
            // Disparar el evento 'onchange' para actualizar la matriz N
            valores[cont].dispatchEvent(new Event('change'));
            cont++;
        }
    }
    document.querySelectorAll('button')[1].click();
}