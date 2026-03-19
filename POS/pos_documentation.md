# Documentación de Handoff: Sistema POS - Tiendas de Promisión Huila

Este documento contiene toda la arquitectura de UX/UI, la lógica funcional y la estructura de datos del sistema POS (Punto de Venta) actual. Su objetivo principal es servir como **contexto para una Inteligencia Artificial** que deba migrar o recrear este proyecto en un nuevo stack tecnológico (por ejemplo, React/Next.js + Postgres/Supabase), asegurando la persistencia de datos al recargar la página.

---

## 1. Identidad de Marca y UI/UX (Design System)

La aplicación tiene una estética "Premium Dark Mode" diseñada especialmente para una cafetería y tienda de productos agrícolas artesanales.

### Paleta de Colores
*   **Fondos (Backgrounds):**
    *   `--bg-main: #0B0E14` (Negro profundo, fondo general)
    *   `--bg-secondary: #131720` (Negro ligero, para tarjetas y paneles)
    *   `--bg-tertiary: #1C222D` (Bordes sutiles y estados *hover*)
*   **Acentos (Accents):**
    *   `--accent-primary: #D4A373` (Dorado/Café Caramelo, color principal de marca para botones activos y totales)
    *   `--accent-hover: #E6B584` (Dorado iluminado para *hover*)
*   **Texto (Typography Colors):**
    *   `--text-primary: #F8F9FA` (Blanco hueso, texto principal)
    *   `--text-secondary: #ADB5BD` (Gris claro, subtítulos y precios secundarios)
    *   `--text-muted: #6C757D` (Gris oscuro, textos sin importancia o vacíos)
*   **Estados (Feedback):**
    *   `--success: #38B000` (Verde, ventas en efectivo/tarjeta o confirmaciones)
    *   `--danger: #FF4D4D` (Rojo, botones de eliminación y cierre)
    *   `--info: #00B4D8` (Azul, acciones neutras como "Nueva Orden")

### Tipografía e Íconos
*   **Fuente Principal:** Google Fonts `Outfit` (Pesos: 300, 400, 500, 600, 700).
*   **Íconos:** Boxicons (`'bx'`).

### Estilo Visual general
*   **Layout Principal:** Diseño responsivo bloqueado a `100vh` con `overflow: hidden`. Consta de 3 columnas lógicas:
    1.  Sidebar de Navegación delgada (Izquierda, `80px`).
    2.  Contenido Principal expansible (Centro).
    3.  Pre-cuenta o Carrito estático (Derecha, `380px`).
*   **Efectos (Estilo Moderno):** Utiliza bordes redondeados (8px a 16px), sombras difuminadas (`box-shadow`) en las tarjetas al pasar el ratón (*hover*), transiciones suaves de `0.3s`, y micro-animaciones (ej. `@keyframes slideIn` para la aparición de los productos). La barra de categorías hace uso de un scroll horizontal (`overflow-x: auto`) con la barra disimulada.

---

## 2. Estructura de Vistas (SPA - Single Page Application)

La aplicación debe comportarse como una SPA. Las vistas centrales cambian según lo que elija el usuario en el sidebar, mientras que el "Carrito" lateral derecho se mantiene siempre visible para no perder contexto de la cobro actual.

### 2.1 Vista: Punto de Venta (Catálogo)
*   **Header:** Nombre de la tienda ("Tiendas de Promisión Huila"), fecha/hora en vivo, y una barra de búsqueda (`input`) general.
*   **Filtros de Categorías:** Barra horizontal desplazable con chips/botones para filtrar el catálogo en tiempo real. Categorías exactas: *B. Calientes, B. Frías, Acompañantes, Chocolate, Café Empacado, Frutas Deshid., Otras Bebidas, Preparación, Artesanías, Miel, Achiras, Antipasto*.
*   **Grid de Productos:** Grilla adaptable (`grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))`) que muestra tarjetas con Imagen (`120px` alto `object-fit:cover`), Nombre y Precio. Cada clic añade el producto a la *Orden Actual* seleccionada.

### 2.2 Vista: Órdenes Activas (Gestión de Mesas/Cuentas)
*   Para soportar múltiples clientes o mesas en simultáneo sin pagar inmediatamente.
*   **Dashboard de Tarjetas:** Muestra todas las órdenes abiertas. Cada tarjeta indica el `#ORD-XXXX`, estado ("En curso" o "Vacía"), cantidad de artículos y el Total actual en COP.
*   **Acción:** Botón grande de "Nueva Orden" (`+`) para instanciar un carrito vacío. Hacer clic en cualquier orden la pone "Activa" y la refleja en la barra lateral del carrito.

### 2.3 Vista: Caja y Contabilidad (Reportes)
*   Gestión de la sesión del cajero y cuadre de caja (vital sincronizar esto a la base de datos).
*   **Botones Principales:** "Abrir Caja" (Pide un monto base de efectivo inicial) y "Cerrar Caja". No se pueden procesar pagos si la caja no está abierta.
*   **Métricas del Dashboard (Tarjetas Grandes):**
    *   Base de Caja (El monto inyectado al abrir).
    *   Ventas en Efectivo.
    *   Ventas Tarjeta.
    *   Ventas Transferencia.
    *   **Total Caja:** (Base + Efectivo). Sumatoria física de billetes.
    *   **Total Ventas:** Suma de todas las ventas ignorando la base.
*   **Historial (Tabla inferior):** Lista las ventas de hoy (ID de la Orden, Hora, Método de pago usado, Total).

### 2.4 Panel Permanente: Carrito (Derecha)
*   **Header:** "#ORD-XXXX". Ayuda visual para saber qué orden estamos afectando.
*   **Lista (Items):** Productos agregados con imagen miniatura (45x45px), botones de cantidad `[-] 1 [+]`, y un botón de eliminación `[x]`.
*   **Sumatoria:** Subtotal, Impuestos (opcional, en esta tienda ya están incluidos en el precio) y Total grande en color Dorado.
*   **Métodos de Pago:** Tres botones excluyentes (Tarjeta, Efectivo, Transferencia).
*   **Botón Final:** "Procesar Pago". (Valida que el monto > 0 y la caja esté abierta). Este botón vacía la orden de la base de datos, asienta la Venta, suma el monto a la Contabilidad del día y abre/descarga un PDF para impresión POS usando librerías como `jsPDF`.

---

## 3. Manejo de Datos (Formatos y Reglas de Negocio)

### 3.1 Formato de Moneda
Toda la aplicación debe utilizar la convención de **Pesos Colombianos (COP)** sin decimales, usando el API local del navegador: `Intl.NumberFormat('es-CO')`.
> Ejemplo de visualización: `$ 5.000` o `$ 13.500`. 

### 3.2 Almacenamiento y Persistencia (Hacia el Backend/Supabase)
En la nueva versión, el estado ya no puede vivir exclusivamente en RAM. Las tablas mínimas recomendadas en la DB son:

1.  **`products`:** Contiene `id`, `name`, `price` (Int), `category` (String referenciando el filtro), `image_url`.
2.  **`active_orders`:** Contiene `id` (String o UUID, ej `#ORD-2041`), `status` (abierta/pagada), `created_at`.
3.  **`order_items`:** Relaciona `order_id`, `product_id`, `quantity` y salva el `price_at_purchase`.
4.  **`sales`:** Creada cuando se "Procesa el Pago". Contiene `order_id`, `total_amount`, `payment_method` (efectivo/tarjeta/transferencia), `created_at`.
5.  **`register_events` (Arqueo):** Guarda la apertura y cierre de la jornada operativa (`type`, `amount_base`, `expected_cash_on_close`, `timestamp`).

### 3.3 Lógica Crítica a migrar:
*   **Carga de Productos:** A diferencia de la V1 donde era un arreglo de objetos estáticos en `products.js`, la IA entrante debe conectarse al backend, descargar la tabla de productos y solo pintar aquellos que pertenezcan a las categorías.
*   **Estado Global:** Herramientas como Redux, Zustand o `Context API` (si es React) serán obligatorias para mantener sincronizado `activeOrderId`, la lista de `orders[]` completas y el carrito.
*   **Generación del Recibo (PDF):** El formato actual de impresión es térmica (80mm). Se debe mapear un formato de texto plano tipo ticket con nombre del cliente/empresa (NIT: 900.000.000-1), fecha, elementos enlistados y total, e invocar el print script o auto-generar PDF.
