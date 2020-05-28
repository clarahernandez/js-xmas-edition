/*--------------------BOTON AGREGAR ---------------------------*/
document.querySelector('#boton-agregar').onclick = function (event) {
    const $div = document.querySelector('#sueldos');
    if ($div.className === 'vacio') {
        noVacioSueldos();
        agregarBotones();
    }
    crearInputSueldo();

    event.preventDefault();
};

function crearInputSueldo() {
    const $div = document.createElement('div');
    $div.className = 'sueldo';

    const $label = document.createElement('label');
    $label.textContent = 'Sueldo del integrante: $';
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $sueldos = document.querySelector('#sueldos');
    $sueldos.appendChild($div);
}

function agregarBotones() {
    document.querySelector('#boton-quitar').className = '';
    document.querySelector('#boton-calcular').className = '';
    document.querySelector('#boton-reset').className = '';
}

function vacioSueldos(clase) {
    document.querySelector('#sueldos').className = 'vacio';
}

function noVacioSueldos(clase) {
    document.querySelector('#sueldos').className = 'no-vacio';
}

/*-----------------------------BOTON QUITAR--------------------------*/
document.querySelector('#boton-quitar').onclick = function (event) {
    const $sueldos = document.querySelectorAll('.sueldo');
    ocultarResultados();
    if ($sueldos.length === 1) {
        quitarBotones();
        vacioSueldos();
    }
    $sueldos[$sueldos.length - 1].remove();
    event.preventDefault();
};

function quitarBotones() {
    document.querySelector('#boton-quitar').className = 'oculto';
    document.querySelector('#boton-calcular').className = 'oculto';
    document.querySelector('#boton-reset').className = 'oculto';
}

function ocultarResultados() {
    document.querySelector('#resultados').className = 'oculto';
}

/*-----------------------BOTON CALCULAR--------------------------------*/
document.querySelector('#boton-calcular').onclick = function (event) {
    const numeros = obtenerSueldos();
    mostrarSueldos('mayor', obtenerMayorNumero(numeros));
    mostrarSueldos('menor', obtenerMenorNumero(numeros));
    mostrarSueldos('promedio', obtenerPromedio(numeros));
    mostrarResultados();
    event.preventDefault();
};

function obtenerSueldos() {
    const $sueldos = document.querySelectorAll('.sueldo input');
    let valores = [];
    for (let i = 0; i < $sueldos.length; i++) {
        if ($sueldos[i].value !== '') {
            valores.push(Number($sueldos[i].value));
        }
    }
    return valores;
}

function mostrarSueldos(tipo, valor) {
    document.querySelector(`#${tipo}-sueldo`).textContent = valor;
}

function mostrarResultados() {
    document.querySelector('#resultados').className = '';
}

/*------------------------BOTON RESET--------------------------------*/
document.querySelector('#boton-reset').onclick = function (event) {
    ocultarResultados();
    vacioSueldos();
    eliminarInputsSueldos();
    quitarBotones();
    event.preventDefault();
};

function eliminarInputsSueldos() {
    const $sueldos = document.querySelectorAll('.sueldo');
    for (let i = 0; i < $sueldos.length; i++) {
        $sueldos[i].remove();
    }
}

/*-----------------------CALCULOS NUMÉRICOS ------------------------*/
function obtenerMayorNumero(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }
    return mayorNumero;
}

function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

function obtenerPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return (suma / numeros.length).toFixed(2); //toFixed redondea con 2 decimales.
}
