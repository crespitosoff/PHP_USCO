<?php
echo "=== EJERCICIO 3: FOR ===\n\n";

// a. Mostrar los números del 1 al 50.
echo "a) Números del 1 al 50:\n";
for ($i = 1; $i <= 50; $i++) {
    echo $i . " ";
}
echo "\n\n";

// b. Imprimir la tabla de multiplicar del 5.
echo "b) Tabla de multiplicar del 5:\n";
for ($i = 1; $i <= 10; $i++) {
    echo "5 x $i = " . (5 * $i) . "\n";
}
echo "\n\n";

// c. Calcular el factorial de un número.
echo "c) Factorial:\n";
$numero = (int) readline("Ingresa un número para calcular su factorial: ");
$factorial = 1; // La variable factorial siempre debe inicializarse en 1, no en 0.
for ($i = 1; $i <= $numero; $i++) {
    $factorial *= $i;
}
echo "El factorial de $numero es: $factorial\n\n";

// d. Mostrar los cuadrados de los primeros 10 números.
echo "d) Cuadrados de los primeros 10 números:\n";
for ($i = 1; $i <= 10; $i++) {
    echo "El cuadrado de $i es: " . ($i * $i) . "\n";
}
echo "\n\n";

// e. Generar una pirámide de asteriscos (*).
echo "e) Pirámide de asteriscos:\n";
$niveles = 5;
for ($i = 1; $i <= $niveles; $i++) {
    // Bucle anidado: el de adentro imprime los asteriscos por cada nivel
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "\n";
}
echo "\n\n";