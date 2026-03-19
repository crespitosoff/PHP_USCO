<?php
// b. Generar números aleatorios entre 1 y 10 hasta que salga el 7. Utilizando rand(min, max)
echo "Generando números aleatorios hasta que salga el 7...<br>";
do {
    $numero_aleatorio = rand(1, 10);
    echo $numero_aleatorio . "<br>";
} while ($numero_aleatorio != 7);
echo "¡Salió el 7!";
?>
