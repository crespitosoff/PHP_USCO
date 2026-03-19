<?php
// ─── Funciones ────────────────────────────────────────────────────────────────

/**
 * Calcula el promedio de tres notas.
 *
 * @param float $nota1 Primera nota
 * @param float $nota2 Segunda nota
 * @param float $nota3 Tercera nota
 * @return float       Promedio redondeado a 2 decimales
 */
function calcularPromedio($nota1, $nota2, $nota3) {
    $promedio = ($nota1 + $nota2 + $nota3) / 3;
    return round($promedio, 2);
}

// ─── Procesamiento del formulario ─────────────────────────────────────────────

$errores = [];
$exito   = false;
$datos   = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitización con FILTER_DEFAULT: elimina bytes nulos sin alterar el valor.
    // htmlspecialchars() en la salida cubre la protección contra XSS.
    $nombre = filter_input(INPUT_POST, 'nombre', FILTER_DEFAULT);
    $correo = filter_input(INPUT_POST, 'correo', FILTER_SANITIZE_EMAIL);
    $nota1  = filter_input(INPUT_POST, 'nota1',  FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $nota2  = filter_input(INPUT_POST, 'nota2',  FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $nota3  = filter_input(INPUT_POST, 'nota3',  FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

    // Validaciones
    if (empty(trim($nombre))) {
        $errores[] = "El nombre no puede estar vacío.";
    }

    if (empty($correo) || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo debe tener un formato válido.";
    }

    if (!is_numeric($nota1) || !is_numeric($nota2) || !is_numeric($nota3)) {
        $errores[] = "Las tres notas deben ser valores numéricos.";
    }

    if (empty($errores)) {
        $exito = true;
        $datos = [
            'nombre'   => $nombre,
            'correo'   => $correo,
            'promedio' => calcularPromedio($nota1, $nota2, $nota3)
        ];
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Parte 3 — Funciones en PHP</title>
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

<h2>Parte 3 — Formulario con <code>calcularPromedio()</code></h2>

<form action="parte3.php" method="POST">
    <label>Nombre completo:</label>
    <input type="text" name="nombre">

    <label>Correo electrónico:</label>
    <input type="text" name="correo">

    <label>Nota 1:</label>
    <input type="text" name="nota1">

    <label>Nota 2:</label>
    <input type="text" name="nota2">

    <label>Nota 3:</label>
    <input type="text" name="nota3">

    <button type="submit">Enviar</button>
</form>

<?php if ($_SERVER["REQUEST_METHOD"] === "POST"): ?>
    <div class="caja">
        <?php if ($exito): ?>
            <p class="exito">✔ Datos validados correctamente:</p>
            <p><strong>Nombre:</strong>   <?= htmlspecialchars($datos['nombre']) ?></p>
            <p><strong>Correo:</strong>   <?= htmlspecialchars($datos['correo']) ?></p>
            <p><strong>Promedio:</strong> <?= $datos['promedio'] ?></p>
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