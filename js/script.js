const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const total = document.querySelector("#total");

const btnMas = document.querySelector("#btnMas");
const btnMenos = document.querySelector("#btnMenos");

let contador = 0;
let valor = Number(precio.innerHTML);

btnMas.addEventListener("click", function () {

    contador++;

    cantidad.innerHTML = contador;

    total.innerHTML = contador * valor;

});

btnMenos.addEventListener("click", function () {

    if (contador > 0) {

        contador--;

        cantidad.innerHTML = contador;

        total.innerHTML = contador * valor;
    }

});