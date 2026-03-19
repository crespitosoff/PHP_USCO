<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreBarista = $_POST['nombreBarista'];
        $horasTrabajadas = (int) $_POST['horasTrabajadas'];

        define("PAGO_POR_HORA", (float) 12500);
        define("HORAS_LIMITE", (int) 40);

        $horasExtras = 0;
        $horasNormales = $horasTrabajadas;

        if ($horasTrabajadas > HORAS_LIMITE) {
            $horasExtras = $horasTrabajadas - HORAS_LIMITE;
            $horasNormales = HORAS_LIMITE; 
            $pagoHorasExtras = $horasExtras * (PAGO_POR_HORA * 1.5);
            $totalHorasTrabajadas = ($horasNormales * PAGO_POR_HORA) + $pagoHorasExtras;
        } else {
            $totalHorasTrabajadas = $horasTrabajadas * PAGO_POR_HORA;
        }
        echo htmlspecialchars("Barista: " . $nombreBarista . ". Horas normales: " . $horasNormales . ". Horas extra: " . $horasExtras . ". Total a pagar: $" . number_format($totalHorasTrabajadas, 0, ',', '.'));
    } else {
        echo "Por favor, envía el formulario desde index.html";
    }
    
?>