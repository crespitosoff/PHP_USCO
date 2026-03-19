<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Taller 2 - Formulario</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form action="procesar.php" method="POST">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="edad">Edad:</label><br>
        <input type="number" id="edad" name="edad" required><br><br>

        <label for="correo">Correo Electrónico:</label><br>
        <input type="email" id="correo" name="correo" required><br><br>

        <label for="ciudad">Ciudad:</label><br>
        <input type="text" id="ciudad" name="ciudad" required><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>