function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.',
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 50 caracteres.',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacío.',
        'Validar ciudad no validó que la ciudad no sea vacío.'
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter.',
        'Validar descripcion regalo no validó que el campo no sea vacío.'
    );

    console.assert(
        validarDescripcionRegalo(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 140 caracteres.',
        'Validar descripcion de regalo no validó que la descripción sea menor a 140 caracteres'
    );
}

probarValidarDescripcionRegalo();
