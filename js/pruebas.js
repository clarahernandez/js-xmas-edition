function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.',
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        ) === 'Este campo debe tener menos de 50 caracteres.',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
    console.assert(
        validarNombre('1234123') === 'El campo nombre solo acepta letras.',
        'Validar nombre no validó que el nombre tenga solo letras..'
    );
    console.assert(
        validarNombre('Clara') === '',
        'Validar nombre no funcionó con un nombre válido.'
    );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacío.',
        'Validar ciudad no validó que la ciudad no sea vacío.'
    );
    console.assert(
        validarCiudad('Santa Fe') === '',
        'Validar ciudad no funciono con un nombre de ciudad válido.'
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
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 100 caracteres.',
        'Validar descripcion de regalo no validó que la descripción sea menor a 100 caracteres'
    );
    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'Validar ciudad no funcionó con un nombre de ciudad válido'
    );
    console.assert(
        validarDescripcionRegalo('Hola, asdasd, ...') ===
            'El campo descripción solo puede tener números y letras.',
        'Validar descripción de regalo no validó que el campo solo tenga números y letras'
    );
}

probarValidarDescripcionRegalo();
