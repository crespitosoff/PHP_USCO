<?php
// Inicializamos variables
$errores = [];
$exito = false;
$datosValidados = [];

// Función para validar si es número (Requisito Parte 4.3)
function esNumeroValido($valor) {
    return !empty($valor) && is_numeric($valor);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 2. Sanitización de todos los campos según el taller [cite: 1158, 1159, 1160, 1161]
    $nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING); 
    $edad = filter_input(INPUT_POST, 'edad', FILTER_SANITIZE_NUMBER_INT);
    $telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_NUMBER_INT);
    $correo = filter_input(INPUT_POST, 'correo', FILTER_SANITIZE_EMAIL);

    // 3. Validaciones [cite: 1162, 1163, 1164, 1165]
    if (empty($nombre)) {
        $errores[] = "El nombre no puede estar vacío.";
    }
    
    if (!esNumeroValido($edad)) {
        $errores[] = "Debe ingresar una edad válida (numérica).";
    }
    
    if (!esNumeroValido($telefono)) {
        $errores[] = "Debe ingresar un número de teléfono válido.";
    }
    
    if (empty($correo) || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo electrónico es obligatorio y debe tener un formato válido.";
    }

    // Si no hay errores, marcamos el éxito
    if (count($errores) === 0) {
        $exito = true;
        $datosValidados = [
            'Nombre' => $nombre,
            'Edad' => $edad,
            'Teléfono' => $telefono,
            'Correo' => $correo
        ];
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Validación</title>
    <style>
        .error { color: red; font-weight: bold; } /* Color rojo para errores [cite: 1166] */
        .exito { color: green; font-weight: bold; } /* Color verde para éxito [cite: 1166] */
        .caja { border: 1px solid #ccc; padding: 15px; margin-top: 15px; width: 300px; }
    </style>
</head>
<body>

    <h2>Formulario de Validación</h2>
    
    <form action="validacion.php" method="POST">
        <label>Nombre:</label><br>
        <input type="text" name="nombre"><br><br>

        <label>Edad:</label><br>
        <input type="text" name="edad"><br><br>

        <label>Teléfono:</label><br>
        <input type="text" name="telefono"><br><br>

        <label>Correo electrónico:</label><br>
        <input type="text" name="correo"><br><br>

        <button type="submit">Enviar</button>
    </form>

    <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>
        <div class="caja">
            <?php if ($exito): ?>
                <div class="exito">
                    <p>✔ Datos validados correctamente:</p>
                    <?php foreach ($datosValidados as $llave => $valor): ?>
                        <p><?php echo $llave . ": " . htmlspecialchars($valor); ?></p>
                    <?php endforeach; ?>
                </div>
            <?php else: ?>
                <div class="error">
                    <p>Errores encontrados:</p>
                    <ul>
                        <?php foreach ($errores as $error): ?>
                            <li><?php echo $error; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>

</body>
</html>