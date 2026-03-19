<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $form_cliente = $_POST['cliente'];
    $form_monto = (float) $_POST['monto'];
        define ("IMPUESTO", 0.19);

    $monto_total = $form_monto + ($form_monto * IMPUESTO);

    echo htmlspecialchars("El total para ". $form_cliente . " es de " . $monto_total . " con impuesto.");

} else {
    echo "Por favor, envía el formulario desde index.html";
}
?>