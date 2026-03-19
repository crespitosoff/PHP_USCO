# Taller: Funciones y Validación de Formularios en PHP

**Asignatura:** Programación Web  
**Universidad Surcolombiana — Facultad de Ingeniería**  
**Autor:** Jhoan Sebastian (GitHub: [@tu-usuario](https://github.com/tu-usuario))

---

## Estructura del repositorio

```
/
├── parte3.php   # Formulario Nombre/Correo/Notas con calcularPromedio()
├── parte4.php   # Formulario completo con validación visual (verde/rojo)
└── README.md    # Partes 1 y 2: marco teórico y ejemplo explicado
```

---

## Parte 1: Investigación — Funciones en PHP

### 1. ¿Qué es una función en programación?

Una función es un bloque de código con nombre propio que agrupa instrucciones diseñadas para realizar una tarea específica. Se define una vez y se puede invocar cuantas veces sea necesario desde cualquier parte del programa, evitando la duplicación de lógica.

### 2. ¿Para qué sirven las funciones?

- **Reutilización:** evitan repetir el mismo código en múltiples lugares.
- **Organización:** dividen un programa complejo en unidades más pequeñas y manejables.
- **Mantenimiento:** un cambio en la lógica solo requiere modificar la función, no cada lugar donde se usaba ese código.
- **Legibilidad:** un nombre de función descriptivo comunica la intención mejor que un bloque de código suelto.

### 3. Sintaxis de una función en PHP

```php
function nombreDeLaFuncion($parametro1, $parametro2) {
    // Cuerpo de la función
    return $resultado;
}
```

- La palabra clave `function` declara la función.
- Los parámetros son opcionales y se definen entre paréntesis.
- `return` es opcional; si se omite, la función devuelve `null`.

### 4. Características de las funciones

| Característica | Descripción |
|---|---|
| **Reutilizables** | Se invocan múltiples veces sin reescribir el código. |
| **Parametrizables** | Reciben datos externos a través de parámetros. |
| **Pueden retornar valores** | Devuelven un resultado con `return`. |
| **Tienen alcance propio** | Las variables definidas dentro no existen fuera (scope local). |
| **Soportan valores por defecto** | Los parámetros pueden tener un valor predeterminado: `function saludar($nombre = "usuario")`. |
| **Pueden ser anónimas** | PHP permite funciones sin nombre asignadas a variables o pasadas como argumentos. |

### 5. Función con retorno vs. sin retorno

**Con retorno:** ejecuta una operación y devuelve un valor que el código llamador puede usar o almacenar.

```php
function sumar($a, $b) {
    return $a + $b; // El resultado queda disponible fuera de la función
}

$resultado = sumar(3, 7); // $resultado = 10
```

**Sin retorno:** ejecuta una acción (imprimir, escribir en base de datos, etc.) pero no produce un valor utilizable por quien la llama.

```php
function mostrarMensaje($texto) {
    echo "<p>" . $texto . "</p>"; // Solo imprime, no devuelve nada
}

mostrarMensaje("Hola"); // No tiene sentido asignarlo a una variable
```

La diferencia clave es que `return` interrumpe la ejecución de la función en ese punto y pasa el valor al contexto donde fue llamada.

### 6. Funciones predefinidas en PHP

PHP incluye una biblioteca estándar con cientos de funciones listas para usar. Algunos grupos relevantes:

| Categoría | Ejemplos |
|---|---|
| **Cadenas** | `strlen()`, `strtolower()`, `str_replace()`, `trim()`, `htmlspecialchars()` |
| **Arreglos** | `count()`, `array_push()`, `sort()`, `array_merge()`, `in_array()` |
| **Matemáticas** | `round()`, `abs()`, `pow()`, `sqrt()`, `rand()` |
| **Filtros / Seguridad** | `filter_input()`, `filter_var()`, `htmlspecialchars()` |
| **Fechas** | `date()`, `time()`, `strtotime()` |
| **Archivos** | `file_get_contents()`, `fopen()`, `fwrite()` |

---

## Parte 2: Ejemplo explicado — `calcularPromedio()`

El siguiente ejemplo implementa la función requerida por el taller: recibir 3 notas, calcular su promedio y retornar el resultado.

```php
<?php
function calcularPromedio($nota1, $nota2, $nota3) {
    $promedio = ($nota1 + $nota2 + $nota3) / 3;
    return round($promedio, 2);
}

$resultado = calcularPromedio(3.5, 4.0, 4.8);
echo "Promedio: " . $resultado;
// Salida: Promedio: 4.1
?>
```

### Desglose

| Elemento | Valor | Descripción |
|---|---|---|
| **Nombre** | `calcularPromedio` | Identifica la función; el nombre describe su propósito. |
| **Parámetros** | `$nota1`, `$nota2`, `$nota3` | Tres valores numéricos recibidos al momento de la invocación. |
| **Cuerpo** | `($nota1 + $nota2 + $nota3) / 3` | Suma las tres notas y divide entre 3 para obtener la media aritmética. |
| **`return`** | `round($promedio, 2)` | Entrega el resultado redondeado a 2 decimales al contexto que llamó la función. Sin `return`, el valor se perdería. |
| **Salida** | `4.1` | El valor retornado se almacena en `$resultado` y se imprime con `echo`. |

---

## Parte 3: Formulario con `calcularPromedio()`

Archivo: [`parte3.php`](./parte3.php)

Campos: Nombre completo, Correo electrónico, Nota 1, Nota 2, Nota 3.

**Sanitización aplicada:**
- Nombre → `FILTER_DEFAULT` + `trim()`
- Correo → `FILTER_SANITIZE_EMAIL`
- Notas → `FILTER_SANITIZE_NUMBER_FLOAT` con `FILTER_FLAG_ALLOW_FRACTION`

**Validaciones:**
- Ningún campo vacío.
- Correo con formato válido (`FILTER_VALIDATE_EMAIL`).
- Las tres notas deben ser numéricas.

**Salida:**
```
✔ Datos validados correctamente:
Nombre:   Jhoan Sebastian
Correo:   jhoan@ejemplo.com
Promedio: 4.1
```

---

## Parte 4: Formulario de validación completa

Archivo: [`parte4.php`](./parte4.php)

Campos: Nombre, Edad, Teléfono, Correo electrónico.

**Sanitización aplicada:**
- Nombre → `FILTER_DEFAULT` + `trim()`
- Edad y Teléfono → `FILTER_SANITIZE_NUMBER_INT`
- Correo → `FILTER_SANITIZE_EMAIL`

**Validaciones:**
- Todos los campos llenos.
- Edad y teléfono numéricos (función personalizada `esNumeroValido()`).
- Correo con formato válido.

**Retroalimentación visual:**
- Datos correctos → texto en **verde**.
- Errores → texto en **rojo**, listados individualmente.

### Vista previa del comportamiento

```
[Formulario vacío enviado]
→ Errores encontrados (rojo):
   • El nombre no puede estar vacío.
   • Debe ingresar una edad válida (numérica).
   • Debe ingresar un número de teléfono válido.
   • El correo electrónico es obligatorio y debe tener un formato válido.

[Formulario completo y válido]
→ ✔ Datos validados correctamente (verde):
   Nombre:   Diana Sofía
   Edad:     42
   Teléfono: 315999999
   Correo:   diana@ejemplo.com
```

---

> **Nota técnica:** `FILTER_SANITIZE_STRING` está deprecado desde PHP 8.1. En este proyecto se usa `FILTER_DEFAULT` como reemplazo, delegando la protección contra XSS a `htmlspecialchars()` en la capa de salida.