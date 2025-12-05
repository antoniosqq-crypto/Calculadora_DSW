const pantalla = document.getElementById('pantalla');
const botonesContenedor = document.querySelector('.botones');

//Una sola función para manejar todos los clics de botón
botonesContenedor.addEventListener('click', function(evento) {

    if (evento.target.tagName !== 'BUTTON') return;

    const valorBoton = evento.target.textContent;

    if (valorBoton === '=') {
        calcular();
    } else if (valorBoton === 'C') {
        borrarPantalla();
    } else if (valorBoton === '⌫') {
        eliminarUltimo();
    } else {
        agregarValor(valorBoton);
    }
});


// Función para agregar números u operadores a la pantalla
function agregarValor(valor) {
    pantalla.value += valor;
}

// Función para limpiar toda la pantalla
function borrarPantalla() {
    pantalla.value = '';
}

// Función para borrar solo el último caracter
function eliminarUltimo() {
    pantalla.value = pantalla.value.toString().slice(0, -1);
}

// Función para calcular el resultado
function calcular() {
    try {
        if(pantalla.value === '') return;
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(() => borrarPantalla(), 1500);
    }
}