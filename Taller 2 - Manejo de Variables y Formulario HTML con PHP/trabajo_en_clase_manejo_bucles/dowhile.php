<?php
echo "=== EJERCICIO 2: DO WHILE ===\n\n";

// a. Tabla de multiplicar de un número solicitado.
echo "a) Tabla de multiplicar:\n";
$numTabla = (int) readline("Ingresa un número para ver su tabla: ");
$i = 1;
do {
    echo "$numTabla x $i = " . ($numTabla * $i) . "\n";
    $i++;
} while ($i <= 10);
echo "\n";

// b. Generar aleatorios entre 1 y 10 hasta que salga el 7.
echo "b) Buscando el número 7...\n";
do {
    $aleatorio = rand(1, 10);
    echo "Salió el: $aleatorio\n";
} while ($aleatorio != 7);
echo "¡Encontramos el 7!\n\n";

// c. Pedir calificaciones hasta ingresar un negativo, luego promedio con arreglo.
echo "c) Calculadora de Promedio:\n";
$calificaciones = []; // Arreglo simple
do {
    $nota = (float) readline("Ingresa una calificación (número negativo para terminar): ");
    if ($nota >= 0) {
        $calificaciones[] = $nota; // Así se agrega un elemento al final de un arreglo en PHP
    }
} while ($nota >= 0);

if (count($calificaciones) > 0) {
    $sumaNotas = array_sum($calificaciones); // Función nativa pro para sumar arreglos
    $promedio = $sumaNotas / count($calificaciones);
    echo "Ingresaste " . count($calificaciones) . " notas. El promedio es: " . number_format($promedio, 2) . "\n\n";
} else {
    echo "No se ingresaron calificaciones válidas.\n\n";
}

// d. Menú interactivo
echo "d) Menú con opciones:\n";
do {
    echo "--- MENÚ ---\n";
    echo "1 = Saludo\n";
    echo "2 = Salir\n";
    $opcion = (int) readline("Elige una opción: ");

    if ($opcion === 1) {
        echo "¡Hola! Qué bueno verte por aquí.\n\n";
    } elseif ($opcion !== 2) {
        echo "Opción no válida, intenta de nuevo.\n\n";
    }
} while ($opcion !== 2);

echo "¡Saliendo del programa... Nos vemos!\n";
?>