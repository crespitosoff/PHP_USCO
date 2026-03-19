<?php
// Variables básicas
$nombre = "Sebastián"; // Puedes cambiar esto por tu nombre real
$carrera = "Tecnología en Desarrollo de Software"; // Puedes cambiar esto por tu carrera
$frase = "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs";

// Texto sobre PHP
$infoPHP = "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.";

// Fecha actual
$fechaActual = date("d/m/Y");
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .card {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            text-align: center;
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        .profession {
            color: #7f8c8d;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }
        .quote {
            font-style: italic;
            color: #34495e;
            border-left: 4px solid #3498db;
            padding-left: 1rem;
            margin: 1.5rem 0;
            text-align: left;
        }
        .php-info {
            background-color: #e8f4fd;
            padding: 1rem;
            border-radius: 6px;
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        .date {
            color: #95a5a6;
            font-size: 0.8rem;
            margin-top: 2rem;
            border-top: 1px solid #eee;
            padding-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>¡Hola! Soy <?php echo $nombre; ?></h1>
        <div class="profession"><?php echo $carrera; ?></div>
        
        <div class="quote">
            "<?php echo $frase; ?>"
        </div>

        <div class="php-info">
            <strong>Sobre PHP:</strong><br>
            <?php echo $infoPHP; ?>
        </div>

        <div class="date">
            Fecha de consulta: <?php echo $fechaActual; ?>
        </div>
    </div>
</body>
</html>
