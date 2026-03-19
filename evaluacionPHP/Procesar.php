<?php
const SALUDO = "Hola, bienvenido ";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST["nombre"];
    $edad = (int) $_POST["edad"];
    $nota1 = (float) $_POST["nota1"];
    $nota2 = (float) $_POST["nota2"];
    $nota3 = (float) $_POST["nota3"];

    if ($nota1 < 0 || $nota1 > 100 || $nota2 < 0 || $nota2 > 100 || $nota3 < 0 || $nota3 > 100) {
        echo "Las notas deben estar entre 0 y 100.";
    } else {
        $promedio = ($nota1 + $nota2 + $nota3) / 3;

        echo "<h2>¡" . SALUDO . $nombre . "!</h2><br><h3>Datos Ingresados <br>Tu nombre es " . $nombre . ". Tu edad es " . $edad . " años. Las notas son " . $nota1 . ", " . $nota2 . " y " . $nota3 . ".";

        if ($promedio >= 60) {
            echo "<br>Has aprobado con un promedio de " . number_format($promedio, 2) . ".</h3>";
        } else if ($promedio < 60) {
            echo "<br>Has reprobado con un promedio de " . number_format($promedio, 2) . ".</h3>";
        } else {
            echo "Por favor, envía el formulario.";
        }

        switch ($promedio) {
            case $promedio >= 90:
                echo "<br>Excelente";
                break;
            case $promedio >= 80:
                echo "<br>Muy Bueno";
                break;
            case $promedio >= 70:
                echo "<br>Bueno";
                break;
            case $promedio >= 60:
                echo "<br>Regular";
                break;
            default:
                echo "<br>Reprobado";
        }

        $nota_mayor = max($nota1, $nota2, $nota3);
        echo "<br>La nota más alta es: " . $nota_mayor;

        $nota_menor = min($nota1, $nota2, $nota3);
        echo "<br>La nota más baja es: " . $nota_menor;

        if($edad < 18){
            echo "<br>Eres menor de edad.";
        } else if ($edad >= 18 && $edad < 45) {
            echo "<br>Eres adulto.";
        } else if ($edad >= 45 && $edad < 60) {
            echo "<br>Eres adulto mayor joven.";
        } else if ($edad >= 60 && $edad < 120) {
            echo "<br>Eres adulto mayor.";
        } else {
            echo "<br>Edad no válida.";
        }

    }
}

?>
<br>
<button onclick="window.location.href='Evaluacion1.html'"><b>Regresar</b></button>