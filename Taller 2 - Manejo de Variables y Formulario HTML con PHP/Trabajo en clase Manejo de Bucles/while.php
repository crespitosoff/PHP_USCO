<?php
echo "=== EJERCICIO 1: WHILE ===\n\n";

// a. Mostrar los números del 1 al 10.
echo "a) Números del 1 al 10:\n";
$a = 1;
while ($a <= 10) {
    echo $a . " ";
    $a++;
}
echo "\n\n";

// b. Imprimir los números pares entre 1 y 20.
echo "b) Números pares entre 1 y 20:\n";
$b = 2;
while ($b <= 20) {
    echo $b . " ";
    $b += 2;
}
echo "\n\n";

// c. Hacer un programa que sume los números del 1 al 100.
echo "c) Suma del 1 al 100:\n";
$c = 1;
$sumaTotal = 0;
while ($c <= 100) {
    $sumaTotal += $c;
    $c++;
}
echo "La suma total es: " . $sumaTotal . "\n\n";

// d. Un bucle while que cuente desde 50 hasta 40.
echo "d) Cuenta regresiva de 50 a 40:\n";
$d = 50;
while ($d >= 40) {
    echo $d . " ";
    $d--;
}
echo "\n\n";

// e. Contador de 1 a 5, mostrando el doble.
echo "e) Doble del contador (1 a 5):\n";
$contador = 1;
while ($contador <= 5) {
    echo ($contador * 2) . " ";
    $contador++;
}
echo "\n\n";
?>