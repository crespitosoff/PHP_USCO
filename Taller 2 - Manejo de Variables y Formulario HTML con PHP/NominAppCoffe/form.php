<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>NominAppCoffe - Formulario</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form action="process.php" method="POST">
        <label for="nombreBarista">Nombre del barista:</label><br>
        <input type="text" id="nombreBarista" name="nombreBarista" required><br><br>

        <label for="horasTrabajadas">Horas Trabajadas:</label><br>
        <input type="number" id="horasTrabajadas" name="horasTrabajadas" required><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>