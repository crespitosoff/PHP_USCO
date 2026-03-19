// App State
let appState = {
    orders: [
        { id: generateOrderId(), items: [], createdAt: new Date() }
    ],
    activeOrderId: null,
    paymentMethod: 'efectivo',
    register: {
        isOpen: false,
        base: 0,
        salesCash: 0,
        salesCard: 0,
        salesTransfer: 0,
        history: [] // session sales
    }
};
// Set to first order by default
appState.activeOrderId = appState.orders[0].id;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('search-input');

// Sidebar/Cart
const cartItemsContainer = document.getElementById('cart-items-container');
const subtotalAmount = document.getElementById('subtotal-amount');
const taxAmount = document.getElementById('tax-amount');
const totalAmount = document.getElementById('total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentBtns = document.querySelectorAll('.payment-btn');
const activeOrderLabel = document.getElementById('active-order-label');
const activeOrderIdLabel = document.getElementById('active-order-id');

// Views Navigation
const navLinks = document.querySelectorAll('.nav-links li');
const viewSections = document.querySelectorAll('.view-section');

// Orders View
const ordersGrid = document.getElementById('orders-grid');
const btnNewOrder = document.getElementById('btn-new-order');

// Reports View
const btnOpenRegister = document.getElementById('btn-open-register');
const btnCloseRegister = document.getElementById('btn-close-register');

// Formatting COP Currency (No decimals)
const formatCOP = (value) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

function generateOrderId() {
    return 'ORD-' + Math.floor(1000 + Math.random() * 9000);
}

// Ensure JS is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 60000);
    
    renderProducts(products);
    setupNavigation();
    setupCategoryFilters();
    setupSearch();
    setupPaymentMethods();
    
    btnNewOrder.addEventListener('click', createNewOrder);
    checkoutBtn.addEventListener('click', handleCheckout);
    
    btnOpenRegister.addEventListener('click', openRegister);
    btnCloseRegister.addEventListener('click', closeRegister);
    
    updateCartUI();
    renderOrdersGrid();
    updateReportsUI();
});

// --- NAVIGATION ---
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            if (!target) return;

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show target view
            viewSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });
            
            if (target === 'view-orders') renderOrdersGrid();
            if (target === 'view-reports') updateReportsUI();
        });
    });
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' };
    let dateStr = now.toLocaleDateString('es-ES', options);
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    
    document.querySelectorAll('.date-time').forEach(el => {
        if(el.id === 'current-datetime') el.textContent = dateStr;
    });
}

// --- PRODUCTS ---
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">No se encontraron productos.</p>';
        return;
    }
    
    productsToRender.forEach((product, index) => {
        // limit animation delay to prevent overly long loads visually
        const delay = Math.min(index * 0.03, 0.5); 
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animation = `slideIn 0.3s ease forwards ${delay}s`;
        card.style.opacity = '0';
        card.onclick = () => addToCart(product);
        
        card.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">${formatCOP(product.price)}</span>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function setupCategoryFilters() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            if (filter === 'all') {
                renderProducts(products);
            } else {
                renderProducts(products.filter(p => p.category === filter));
            }
        });
    });
}

function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-filter');
        
        let filtered = products;
        if (activeCategory !== 'all') {
            filtered = filtered.filter(p => p.category === activeCategory);
        }
        if (term) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
        }
        renderProducts(filtered);
    });
}

// --- CART & ORDERS LOGIC ---
function getActiveOrder() {
    return appState.orders.find(o => o.id === appState.activeOrderId);
}

function createNewOrder() {
    const newOrder = {
        id: generateOrderId(),
        items: [],
        createdAt: new Date()
    };
    appState.orders.push(newOrder);
    appState.activeOrderId = newOrder.id;
    
    // Switch to POS View
    document.querySelector('[data-target="view-pos"]').click();
    updateCartUI();
}

function switchOrder(orderId) {
    appState.activeOrderId = orderId;
    document.querySelector('[data-target="view-pos"]').click();
    updateCartUI();
}

function addToCart(product) {
    const order = getActiveOrder();
    if (!order) return;

    const existingItem = order.items.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        order.items.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function updateQuantity(id, delta) {
    const order = getActiveOrder();
    const itemIndex = order.items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        order.items[itemIndex].quantity += delta;
        if (order.items[itemIndex].quantity <= 0) {
            order.items.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function removeFromCart(id) {
    const order = getActiveOrder();
    order.items = order.items.filter(item => item.id !== id);
    updateCartUI();
}

function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const order = getActiveOrder();
    if (!order) return;

    activeOrderLabel.textContent = ``;
    activeOrderIdLabel.textContent = `#${order.id}`;

    if (order.items.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class='bx bx-cart' style="font-size:48px; opacity:0.5; margin-bottom:10px;"></i>
                <p>Tu orden está vacía</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = '';
        order.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            
            const itemTotal = item.price * item.quantity;
            itemElement.innerHTML = `
                <img src="${item.image_url}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-price">${formatCOP(itemTotal)}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class='bx bx-x'></i></button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
    const subtotal = calculateOrderTotal(order);
    const tax = 0; // Removing 10% explicit since it says "Impuestos (Incluidos)"
    const total = subtotal + tax;
    
    subtotalAmount.textContent = formatCOP(subtotal);
    taxAmount.textContent = formatCOP(tax);
    totalAmount.textContent = formatCOP(total);
    
    checkoutBtn.style.opacity = order.items.length > 0 ? '1' : '0.5';
    checkoutBtn.style.pointerEvents = order.items.length > 0 ? 'auto' : 'none';
}

function setupPaymentMethods() {
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.paymentMethod = btn.getAttribute('data-method');
        });
    });
}

function renderOrdersGrid() {
    ordersGrid.innerHTML = '';
    appState.orders.forEach(order => {
        const total = calculateOrderTotal(order);
        const itemCount = order.items.reduce((s, i) => s + i.quantity, 0);
        
        const card = document.createElement('div');
        card.className = `order-card ${order.id === appState.activeOrderId ? 'active' : ''}`;
        card.onclick = () => switchOrder(order.id);
        
        card.innerHTML = `
            <div class="order-card-header">
                <span class="order-card-title">Pedido #${order.id}</span>
                <span class="order-card-status">${itemCount > 0 ? 'En curso' : 'Vacía'}</span>
            </div>
            <div class="order-card-details">
                ${itemCount} artículos
            </div>
            <div class="order-card-total">
                ${formatCOP(total)}
            </div>
        `;
        ordersGrid.appendChild(card);
    });
}

// --- CHECKOUT & REPORTS ---
async function handleCheckout() {
    if (!appState.register.isOpen) {
        alert("¡Atención! La caja está cerrada. Por favor abre la caja en Contabilidad.");
        return;
    }

    const order = getActiveOrder();
    if (!order || order.items.length === 0) return;
    
    const total = calculateOrderTotal(order);
    
    // Animate button
    checkoutBtn.textContent = 'Procesando...';
    checkoutBtn.style.backgroundColor = 'var(--success)';
    
    const saleData = {
        order_id: order.id,
        items: JSON.stringify(order.items), // Convert to string for simple DB storage
        total_amount: total,
        payment_method: appState.paymentMethod,
        created_at: new Date().toISOString()
    };

    // 1. Save to Supabase
    await supabaseService.insertSale(saleData);

    // 2. Update Local Accounting State
    appState.register.history.push({
        ...saleData,
        dateObj: new Date()
    });
    
    if(appState.paymentMethod === 'efectivo') appState.register.salesCash += total;
    else if(appState.paymentMethod === 'tarjeta') appState.register.salesCard += total;
    else if(appState.paymentMethod === 'transferencia') appState.register.salesTransfer += total;

    updateReportsUI();

    // 3. Generate PDF Receipt
    generateReceiptPDF(order, total, appState.paymentMethod);

    // 4. Cleanup Order
    alert(`¡Pago procesado con éxito por ${formatCOP(total)}!`);
    
    // Remove completed order
    appState.orders = appState.orders.filter(o => o.id !== order.id);
    if(appState.orders.length === 0) {
        createNewOrder(); // ensures we always have at least 1 order
    } else {
        appState.activeOrderId = appState.orders[0].id;
        updateCartUI();
    }
    
    // Reset button
    checkoutBtn.textContent = 'Procesar Pago';
    checkoutBtn.style.backgroundColor = 'var(--accent-primary)';
}

function generateReceiptPDF(order, total, method) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        console.warn("jsPDF not loaded. Skipping PDF generation.");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ format: [80, 200] }); // POS paper size approx 80mm width
    
    doc.setFontSize(14);
    doc.text("Tiendas Promisión Huila", 40, 10, { align: "center" });
    doc.setFontSize(10);
    doc.text("NIT: 900.000.000-1", 40, 16, { align: "center" });
    doc.text("Neiva, Huila", 40, 21, { align: "center" });
    
    doc.text(`Orden: ${order.id}`, 5, 30);
    doc.text(`Fecha: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 5, 35);
    doc.text(`Método: ${method.toUpperCase()}`, 5, 40);
    
    doc.line(5, 43, 75, 43);
    
    let y = 50;
    doc.text("Cant  Producto                Subtotal", 5, y);
    y += 5;
    
    order.items.forEach(item => {
        let name = item.name.substring(0, 15);
        let qty = item.quantity.toString().padEnd(4, ' ');
        let sub = formatCOP(item.price * item.quantity);
        
        doc.text(`${qty} ${name}`, 5, y);
        doc.text(`${sub}`, 75, y, { align: 'right' });
        y += 5;
    });
    
    doc.line(5, y, 75, y);
    y += 6;
    doc.setFontSize(12);
    doc.text("TOTAL:", 5, y);
    doc.text(formatCOP(total), 75, y, { align: 'right' });
    
    y += 10;
    doc.setFontSize(10);
    doc.text("¡Gracias por su compra!", 40, y, { align: "center" });

    // Try to open PDF in new window for printing
    // doc.autoPrint();
    // window.open(doc.output('bloburl'), '_blank');
    
    // For local dev, auto-download is safer since bloburls can be blocked
    doc.save(`Recibo-${order.id}.pdf`);
}

function openRegister() {
    if(appState.register.isOpen) {
        alert("La caja ya está abierta.");
        return;
    }
    const baseInput = prompt("Ingrese el monto base de apertura de caja (Efectivo):", "0");
    if(baseInput !== null) {
        const base = parseInt(baseInput.replace(/\D/g,'')) || 0;
        appState.register.isOpen = true;
        appState.register.base = base;
        
        // Save event to DB
        supabaseService.saveRegisterEvent({ type: 'open', amount: base, timestamp: new Date().toISOString() });
        
        btnOpenRegister.style.opacity = '0.5';
        btnCloseRegister.style.opacity = '1';
        updateReportsUI();
        alert(`Caja abierta con base: ${formatCOP(base)}`);
    }
}

function closeRegister() {
    if(!appState.register.isOpen) {
        alert("La caja ya está cerrada.");
        return;
    }
    if(confirm("¿Seguro que deseas cerrar la caja? Esto reiniciará las ventas de la sesión actual.")) {
        
        const totalCash = appState.register.base + appState.register.salesCash;
        
        // Save event
        supabaseService.saveRegisterEvent({ 
            type: 'close', 
            expected_cash: totalCash,
            sales_card: appState.register.salesCard,
            sales_transfer: appState.register.salesTransfer,
            timestamp: new Date().toISOString() 
        });

        const report = `Cierre de Caja:\nBase: ${formatCOP(appState.register.base)}\nVentas Efectivo: ${formatCOP(appState.register.salesCash)}\nEfectivo Esperado: ${formatCOP(totalCash)}`;
        alert(report);

        // Reset register
        appState.register = {
            isOpen: false,
            base: 0,
            salesCash: 0,
            salesCard: 0,
            salesTransfer: 0,
            history: [] // clear history
        };
        
        btnOpenRegister.style.opacity = '1';
        btnCloseRegister.style.opacity = '0.5';
        updateReportsUI();
    }
}

function updateReportsUI() {
    document.getElementById('report-base').textContent = formatCOP(appState.register.base);
    document.getElementById('report-cash').textContent = formatCOP(appState.register.salesCash);
    document.getElementById('report-card').textContent = formatCOP(appState.register.salesCard);
    document.getElementById('report-transfer').textContent = formatCOP(appState.register.salesTransfer);
    
    const totalCash = appState.register.base + appState.register.salesCash;
    const totalSales = appState.register.salesCash + appState.register.salesCard + appState.register.salesTransfer;
    
    document.getElementById('report-total-cash').textContent = formatCOP(totalCash);
    document.getElementById('report-total-sales').textContent = formatCOP(totalSales);

    // Sales History
    const tbody = document.getElementById('sales-history-body');
    tbody.innerHTML = '';
    
    appState.register.history.forEach(sale => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${sale.order_id}</td>
            <td>${sale.dateObj.toLocaleTimeString()}</td>
            <td style="text-transform: capitalize;">${sale.payment_method}</td>
            <td><strong>${formatCOP(sale.total_amount)}</strong></td>
        `;
        tbody.prepend(tr); // newest first
    });
}
