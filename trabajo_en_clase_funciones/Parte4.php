<?php
// ─── Funciones ────────────────────────────────────────────────────────────────

/**
 * Verifica que un valor no esté vacío y sea numérico.
 *
 * @param mixed $valor
 * @return bool
 */
function esNumeroValido($valor) {
    return !empty($valor) && is_numeric($valor);
}

// ─── Procesamiento del formulario ─────────────────────────────────────────────

$errores = [];
$exito   = false;
$datos   = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitización
    // FILTER_DEFAULT reemplaza a FILTER_SANITIZE_STRING (deprecado desde PHP 8.1).
    // La protección XSS se delega a htmlspecialchars() en la salida.
    $nombre   = filter_input(INPUT_POST, 'nombre',   FILTER_DEFAULT);
    $edad     = filter_input(INPUT_POST, 'edad',     FILTER_SANITIZE_NUMBER_INT);
    $telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_NUMBER_INT);
    $correo   = filter_input(INPUT_POST, 'correo',   FILTER_SANITIZE_EMAIL);

    // Validaciones
    if (empty(trim($nombre))) {
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

    if (empty($errores)) {
        $exito = true;
        $datos = [
            'Nombre'   => $nombre,
            'Edad'     => $edad,
            'Teléfono' => $telefono,
            'Correo'   => $correo
        ];
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Parte 4 — Formulario de Validación</title>
    <style>
        body  { font-family: Arial, sans-serif; max-width: 400px; margin: 30px auto; }
        label { display: block; margin-top: 10px; font-weight: bold; }
        input { width: 100%; padding: 6px; box-sizing: border-box; }
        .error { color: red;   font-weight: bold; }
        .exito { color: green; font-weight: bold; }
        .caja  { border: 1px solid #ccc; padding: 15px; margin-top: 15px; }
        button { margin-top: 15px; padding: 8px 20px; }
    </style>
</head>
<body>

<h2>Parte 4 — Formulario de Validación</h2>

<form action="parte4.php" method="POST">
    <label>Nombre:</label>
    <input type="text" name="nombre">

    <label>Edad:</label>
    <input type="text" name="edad">

    <label>Teléfono:</label>
    <input type="text" name="telefono">

    <label>Correo electrónico:</label>
    <input type="text" name="correo">

    <button type="submit">Enviar</button>
</form>

<?php if ($_SERVER["REQUEST_METHOD"] === "POST"): ?>
    <div class="caja">
        <?php if ($exito): ?>
            <p class="exito">✔ Datos validados correctamente:</p>
            <?php foreach ($datos as $llave => $valor): ?>
                <p class="exito"><strong><?= htmlspecialchars($llave) ?>:</strong> <?= htmlspecialchars($valor) ?></p>
            <?php endforeach; ?>
        <?php else: ?>
            <p class="error">Errores encontrados:</p>
            <ul>
                <?php foreach ($errores as $error): ?>
                    <li class="error"><?= htmlspecialchars($error) ?></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </div>
<?php endif; ?>

</body>
</html>