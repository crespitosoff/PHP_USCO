<?php
// a. Solicitar un número y mostrar su tabla de multiplicar (asegurando que se ejecute al menos
// una vez).
if (isset($_POST['numero'])) {
    $numero = intval($_POST['numero']);
    $i = 1;
    echo "<h2>Tabla de multiplicar del " . $numero . "</h2>";
    do {
        echo $numero . " x " . $i . " = " . ($numero * $i) . "<br>";
        $i++;
    } while ($i <= 10);
} else {
    echo "Por favor, introduce un número en el <a href='index.html'>formulario</a>.";
}
?>
