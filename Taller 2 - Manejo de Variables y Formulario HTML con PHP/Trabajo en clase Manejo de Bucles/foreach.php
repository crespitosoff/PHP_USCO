<?php
echo "=== EJERCICIO 4: FOREACH ===\n\n";

// a. Recorrer un arreglo de frutas.
echo "a) Arreglo de frutas:\n";
$frutas = ["Mango", "Fresa", "Banano", "Lulo"];
foreach ($frutas as $fruta) {
    echo "- $fruta\n";
}
echo "\n";

// b. Mostrar los nombres de 5 estudiantes.
echo "b) Estudiantes:\n";
$estudiantes = ["Ana", "Camilo", "Valentina", "David", "Sofía"];
foreach ($estudiantes as $estudiante) {
    echo "Estudiante: $estudiante\n";
}
echo "\n";

// c. Recorrer un arreglo asociativo de productos y precios.
echo "c) Productos y precios:\n";
$productos = [
    "Café V60" => 8500,
    "Café Mocha" => 7000,
    "Chemex" => 12000
];
foreach ($productos as $producto => $precio) {
    echo "El $producto tiene un valor de $" . number_format($precio, 0, ',', '.') . "\n";
}
echo "\n";

// d. Calcular el total de una factura con un arreglo asociativo.
echo "d) Total de la factura:\n";
$totalFactura = 0;
// Reutilizamos el arreglo de la cafetería de arriba
foreach ($productos as $precio) { 
    // Nota: Si no necesitamos el nombre del producto, podemos omitir la clave
    $totalFactura += $precio;
}
echo "El total a pagar es: $" . number_format($totalFactura, 0, ',', '.') . "\n\n";

// e. Calcular el promedio de notas de un arreglo.
echo "e) Promedio de notas:\n";
$calificaciones = [4.5, 3.8, 5.0, 4.2];
$sumaNotas = 0;
foreach ($calificaciones as $nota) {
    $sumaNotas += $nota;
}
$promedio = $sumaNotas / count($calificaciones);
echo "El promedio de las calificaciones es: " . number_format($promedio, 2) . "\n";
?>