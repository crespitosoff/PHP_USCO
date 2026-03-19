<?php
// c. Pedir calificaciones hasta que se ingrese un número negativo y luego calcular el promedio.
// Deben crear un arreglo simple.
session_start();

// Inicializar el arreglo de calificaciones si no existe
if (!isset($_SESSION['calificaciones'])) {
    $_SESSION['calificaciones'] = [];
}

if (isset($_POST['calificacion'])) {
    $calificacion = floatval($_POST['calificacion']);

    if ($calificacion >= 0) {
        // Agregar la calificación al arreglo
        $_SESSION['calificaciones'][] = $calificacion;
        // Redirigir para ingresar la siguiente calificación
        header('Location: c_index.html');
        exit();
    } else {
        // Calcular el promedio
        $calificaciones = $_SESSION['calificaciones'];
        if (count($calificaciones) > 0) {
            $promedio = array_sum($calificaciones) / count($calificaciones);
            echo "El promedio de las calificaciones es: " . $promedio;
        } else {
            echo "No se ingresaron calificaciones.";
        }
        // Limpiar la sesión
        session_destroy();
    }
} else {
    // Si no se ha enviado nada, destruir la sesión por si acaso y redirigir al inicio
    session_destroy();
    header('Location: c_index.html');
    exit();
}
?>
