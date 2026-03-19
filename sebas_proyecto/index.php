<?php
    date_default_timezone_set('America/Bogota');
    $nombre = "Jhose";
    $hora = date("H:i:s");

    if ($hora < 12) {
        $saludo = "Buenos días ☀️";
    } elseif ($hora < 18) {
        $saludo = "Buenas tardes 🌤️";
    } else {
        $saludo = "Buenas noches 🌙";
    }
?>

<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; background: #222; color: #fff; text-align: center; padding: 50px; }
        h1 { color: #00d4ff; }
    </style>
</head>
<body>
    <h1><?= $saludo ?></h1> <p>Hora del servidor: <?= $hora ?>:00</p>
</body>
</html>