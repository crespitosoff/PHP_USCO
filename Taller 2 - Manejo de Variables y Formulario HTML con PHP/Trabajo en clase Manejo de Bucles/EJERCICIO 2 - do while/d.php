<?php
// d. Mostrar un menú con opciones (1 = saludo, 2 = salir) que se repita hasta que el usuario elija 2.

if (isset($_POST['opcion'])) {
    $opcion = intval($_POST['opcion']);

    do {
        if ($opcion == 1) {
            // Redirige de vuelta al formulario con un mensaje
            header("Location: d_index.html?msg=¡Hola! ¿Qué tal?");
            exit();
        } elseif ($opcion == 2) {
            echo "¡Hasta luego!";
            // Termina el script
            break; 
        } else {
             // Opción no válida, redirige de nuevo
            header("Location: d_index.html?msg=Opción no válida. Intenta de nuevo.");
            exit();
        }
    } while ($opcion != 2);

} else {
    // Si no se ha enviado nada, redirigir al inicio
    header('Location: d_index.html');
    exit();
}
?>
