<?php
// --- PARTE 1: Tipos de datos [cite: 7] ---
$tipoString = "Hola profesor"; // string [cite: 8]
$tipoInt = 25;                 // int [cite: 8]
$tipoFloat = 3.1416;           // float [cite: 8]

echo "<h3>1. Tipos de Datos y var_dump()</h3>";
var_dump($tipoString); // 
echo "<br>";
var_dump($tipoInt); // 
echo "<br>";
var_dump($tipoFloat); // 
echo "<hr>";


// --- PARTE 2 y 3: Variables simples y Constante [cite: 10, 12] ---
define("UNIVERSIDAD", "Universidad Surcolombiana"); // 

// Declaración de datos personales [cite: 11]
$miNombre = "Sebas"; 
$miEdad = 22; 
$miCorreo = "sebas@ejemplo.com";
$miCiudad = "Neiva"; 

echo "<h3>2. Variables Simples</h3>";
echo "Nombre: " . $miNombre . "<br>"; // [cite: 11]
echo "Edad: " . $miEdad . "<br>"; // [cite: 11]
echo "Correo: " . $miCorreo . "<br>"; // [cite: 11]
echo "Ciudad: " . $miCiudad . "<br>"; // [cite: 11]
echo "Universidad: " . UNIVERSIDAD . "<br>"; // 
echo "<hr>";


// --- PARTE 4: Concatenación  ---
echo "<h3>3. Concatenación</h3>";
// Uso de concatenación para mostrar el mensaje exacto [cite: 15]
echo "Hola, soy " . $miNombre . ", tengo " . $miEdad . " años y vivo en " . $miCiudad . ".<br>"; // [cite: 16]
echo "<hr>";


// --- PARTE 5: Procesamiento del Formulario [cite: 19] ---
define("MENSAJE_EXITO", "Formulario enviado con éxito"); // [cite: 20]

echo "<h3>4. Datos del Formulario HTML</h3>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturamos los datos que vienen del index.html
    $form_nombre = $_POST['nombre'];
    $form_edad = $_POST['edad'];
    $form_correo = $_POST['correo'];
    $form_ciudad = $_POST['ciudad'];

    // Mensaje de bienvenida junto con el nombre de la universidad [cite: 19]
    echo "¡Bienvenido, " . $form_nombre . "! Qué bueno verte en la " . UNIVERSIDAD . ".<br><br>"; 
    
    // Mostramos los datos en formato de párrafos [cite: 20]
    echo "<p><strong>Resumen de tu registro:</strong></p>";
    echo "<p>Nombre: " . $form_nombre . "</p>"; 
    echo "<p>Edad: " . $form_edad . "</p>"; 
    echo "<p>Correo: " . $form_correo . "</p>"; 
    echo "<p>Ciudad: " . $form_ciudad . "</p>"; 
    
    // Constante de éxito al final [cite: 20]
    echo "<p><em>" . MENSAJE_EXITO . "</em></p>"; 
} else {
    echo "Por favor, envía el formulario desde index.html";
}
?>