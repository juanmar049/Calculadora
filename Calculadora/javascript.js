let pantalla = document.getElementById("pantalla");

function agregarNumero(numero) {
    pantalla.value += numero;
}

function agregarOperador(operador) {
    pantalla.value += operador;
}

function limpiarPantalla() {
    pantalla.value = "";
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}

function calcularPorcentaje() {
    try {
        pantalla.value = eval(pantalla.value) / 100;
    } catch {
        pantalla.value = "Error";
    }
}