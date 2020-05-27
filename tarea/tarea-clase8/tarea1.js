document.querySelector('#boton-siguiente').onclick = function (event) {
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares');
    const cantidadFamiliares = Number($cantidadFamiliares.value);

    borrarFamiliaresAnteriores(cantidadFamiliares);
    crearFamiliares(cantidadFamiliares);

    event.preventDefault(); //Evita que se envíe el formulario.
};

document.querySelector('#boton-resetear').onclick = function () {
    resetear();
};

function borrarFamiliaresAnteriores() {
    const $familiares = document.querySelectorAll('.familiar');
    for (let i = 0; i < $familiares.length; i++) {
        $familiares[i].remove();
    }
}

function crearFamiliares(cantidadFamiliares) {
    if (cantidadFamiliares > 0) {
        mostrarBotonCalcular();
    } else {
        resetear();
    }
    for (let i = 0; i < cantidadFamiliares; i++) {
        crearFamiliar(i);
    }
}

function crearFamiliar(indice) {
    const $div = document.createElement('div');
    $div.className = 'familiar';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del familiar N°' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $familiares = document.querySelector('#familiares');
    $familiares.appendChild($div);
}

function mostrarBotonCalcular() {
    document.querySelector('#boton-calcular').className = '';
}

function resetear() {
    borrarFamiliaresAnteriores();
    ocultarBotonCalcular();
    ocultarResultados();
}

function ocultarBotonCalcular() {
    document.querySelector('#boton-calcular').className = 'oculto';
}
function ocultarResultados() {
    document.querySelector('#resultados').className = 'oculto';
}

function obtenerEdadesFamiliares() {
    const $familiares = document.querySelectorAll('.familiar input');
    let edades = [];
    for (let i = 0; i < $familiares.length; i++) {
        edades.push(Number($familiares[i].value));
    }
    return edades;
}

document.querySelector('#boton-calcular').onclick = function (event) {
    const numeros = obtenerEdadesFamiliares();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault(); //Evita que se envíe el formulario.
};

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

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function mostrarResultados() {
    document.querySelector('#resultados').className = '';
}
