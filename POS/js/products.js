const products = [
    // Bebidas Calientes
    { id: 1, name: 'Espresso', price: 5000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80' },
    { id: 2, name: 'Americano', price: 5000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80' },
    { id: 3, name: 'Capuccino Sencillo', price: 7000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80' },
    { id: 4, name: 'Capuccino Arequipe', price: 8500, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1572442388796-11668aa44f76?w=500&q=80' },
    { id: 5, name: 'Capuccino Vegano', price: 8500, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1579621970258-297dc34f9aab?w=500&q=80' },
    { id: 6, name: 'Capuccino Mocca', price: 8500, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1558770147-1a403d6d06d4?w=500&q=80' },
    { id: 7, name: 'Capuccino Mochai', price: 12000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1558770147-1a403d6d06d4?w=500&q=80' },
    { id: 8, name: 'Capuccino Chai', price: 12000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1572442388796-11668aa44f76?w=500&q=80' },
    { id: 9, name: 'Macciato', price: 5000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&q=80' },
    { id: 10, name: 'Campesino', price: 8000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4db7d4?w=500&q=80' },
    { id: 11, name: 'Infusión de Frutas', price: 6000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&q=80' },
    { id: 12, name: 'Agua de Panela', price: 6500, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80' },
    { id: 13, name: 'Chocolate', price: 9000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1400688321035-71cb14b03681?w=500&q=80' },
    { id: 14, name: 'Chocolate Opita', price: 13000, category: 'bebidas_calientes', image_url: 'https://images.unsplash.com/photo-1400688321035-71cb14b03681?w=500&q=80' },

    // Bebidas Frías
    { id: 15, name: 'Cold Brew', price: 7500, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80' },
    { id: 16, name: 'Americano Ice', price: 5500, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1517701550927-30cfcb64d360?w=500&q=80' },
    { id: 17, name: 'Latte frío', price: 7500, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80' },
    { id: 18, name: 'Mocca frío', price: 8500, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1572442388796-11668aa44f76?w=500&q=80' },
    { id: 19, name: 'Opita Bajo Cero', price: 12000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1550953839-81bc7774d0d3?w=500&q=80' },
    { id: 20, name: 'Afogato', price: 9500, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1550953839-81bc7774d0d3?w=500&q=80' },
    { id: 21, name: 'Malteada', price: 10000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1572464139947-f0bb2dcf0b10?w=500&q=80' },
    { id: 22, name: 'Granizado / Jugo', price: 10000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80' },
    { id: 23, name: 'Limonada', price: 8000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80' },
    { id: 24, name: 'Mojito Opita', price: 15000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=80' },
    { id: 25, name: 'Soda', price: 5000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80' },
    { id: 26, name: 'Soda Saborizada', price: 7000, category: 'bebidas_frias', image_url: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?w=500&q=80' },

    // Para Acompañar
    { id: 27, name: 'Torta', price: 8000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80' },
    { id: 28, name: 'Almojábana', price: 4000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1610405108605-df1b4fecda1f?w=500&q=80' }, /* generic bread */
    { id: 29, name: 'Bombon de cacao', price: 3000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&q=80' },
    { id: 30, name: 'Bizcocho de Achira / Yuca', price: 3000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1601314115160-53eac3fcd77b?w=500&q=80' },
    { id: 31, name: 'Galleta de avena', price: 4000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80' },
    { id: 32, name: 'Empanada', price: 4000, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80' },
    { id: 33, name: 'Hojaldre de Pollo', price: 6500, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80' },
    { id: 34, name: 'Palito de queso', price: 6500, category: 'para_acompanar', image_url: 'https://images.unsplash.com/photo-1541592102781-ef0f10c1146c?w=500&q=80' },

    // Chocolate
    { id: 35, name: 'Cacao Cacahuarte (500g)', price: 71500, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1511381939415-e1f6e28f15ce?w=500&q=80' },
    { id: 36, name: 'Chocolate de mesa Cacahuarte (250g)', price: 38600, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1548883354-94e82bd07675?w=500&q=80' },
    { id: 37, name: 'Chocolate de mesa YAYA (40g)', price: 8000, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1548883354-94e82bd07675?w=500&q=80' },
    { id: 38, name: 'Chocolate de mesa YAYA (250g)', price: 15000, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1548883354-94e82bd07675?w=500&q=80' },
    { id: 39, name: 'Chocolate de mesa Santamaría (250g)', price: 20000, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1548883354-94e82bd07675?w=500&q=80' },
    { id: 40, name: 'Chocolatina Santamaría (40g)', price: 8000, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1623356300435-c8bc9197c31d?w=500&q=80' },
    { id: 41, name: 'Chococeibas (500g)', price: 13000, category: 'chocolate', image_url: 'https://images.unsplash.com/photo-1511381939415-e1f6e28f15ce?w=500&q=80' },

    // Café (Empacado)
    { id: 42, name: 'Café Robles', price: 35000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 43, name: 'Café Mirador', price: 30000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 44, name: 'Oso de la Montaña (340g)', price: 35000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 45, name: 'Agapeo', price: 25000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 46, name: 'Brufe Bourbon Rosado (340g)', price: 40000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 47, name: 'Brufe Variedad Carmín (500g)', price: 35000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 48, name: 'Ricafé', price: 25000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 49, name: 'APU Café Caturra (500g)', price: 40000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 50, name: 'APU Bourbon Amarillo (500g)', price: 48000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 51, name: 'APU Bourbon Rosado', price: 48000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 52, name: 'APU Natural Mujeres', price: 48000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 53, name: 'APÚ con Cardamomo (250g)', price: 25000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },
    { id: 54, name: 'APU Gesha (250g)', price: 32000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 55, name: 'Cardamomo Molido (50g)', price: 15000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80' },
    { id: 56, name: 'Cardamomo Pergamino (50g)', price: 15000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80' },
    { id: 57, name: 'Cardamomo Semilla (50g)', price: 10000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80' },
    { id: 58, name: 'San Juan', price: 20000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 59, name: 'Capullo Honey', price: 40000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 60, name: 'Capullo Lavado', price: 35000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 61, name: 'APÚ Instantáneo', price: 18000, category: 'cafe', image_url: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe2942?w=500&q=80' },

    // Frutas Deshidratadas
    { id: 62, name: 'Pitahaya Deshidratada', price: 22000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1563220462-81cbf0ab9c68?w=500&q=80' },
    { id: 63, name: 'Mix de Fruta Deshidratada', price: 20000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&q=80' },
    { id: 64, name: 'Mango Deshidratado', price: 20000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80' },
    { id: 65, name: 'Banano Deshidratado', price: 20000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80' },
    { id: 66, name: 'Piña Deshidratada', price: 20000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80' },
    { id: 67, name: 'Limón Deshidratado (1 lb)', price: 40000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1590502593747-422fe9390ea6?w=500&q=80' },
    { id: 68, name: 'Naranja Deshidratada (1 lb)', price: 40000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1611099688172-e1ebda2f24c3?w=500&q=80' },
    { id: 69, name: 'Flor de Jamaica (1 lb)', price: 30000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1552528701-d77977a41400?w=500&q=80' },
    { id: 70, name: 'Parfait', price: 9000, category: 'frutas_deshidratadas', image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },

    // Bebidas Comerciales / Adicionales
    { id: 71, name: 'Infusión Mix de Fruta', price: 25000, category: 'bebidas', image_url: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80' },
    { id: 72, name: 'Cerveza Tatacoa', price: 10000, category: 'bebidas', image_url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80' },
    { id: 73, name: 'Yogurt de Cholupa', price: 3000, category: 'bebidas', image_url: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&q=80' },
    { id: 74, name: 'Botella de Agua', price: 2000, category: 'bebidas', image_url: 'https://images.unsplash.com/photo-1548839140-29a749e1abc5?w=500&q=80' },

    // Preparación Café
    { id: 75, name: 'Prensa Francesa', price: 80000, category: 'preparacion_cafe', image_url: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=500&q=80' },
    { id: 76, name: 'Molino Manual', price: 120000, category: 'preparacion_cafe', image_url: 'https://images.unsplash.com/photo-1585764436894-386dbe329c34?w=500&q=80' },
    { id: 77, name: 'Dripper', price: 3500, category: 'preparacion_cafe', image_url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80' },

    // Artesanías
    { id: 78, name: 'Sombreros de Pindo', price: 150000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&q=80' },
    { id: 79, name: 'Bolsos de Pindo', price: 80000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80' },
    { id: 80, name: 'Collar', price: 55000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1599643478524-fb66f70d00de?w=500&q=80' },
    { id: 81, name: 'Aretes Representativos', price: 45000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' },
    { id: 82, name: 'Servilleteros APU', price: 30000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500&q=80' },
    { id: 83, name: 'Despulpadora (Artesanía)', price: 20000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1601314115160-53eac3fcd77b?w=500&q=80' },
    { id: 84, name: 'Portalapiz Ficca', price: 18000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?w=500&q=80' },
    { id: 85, name: 'Chivas de Pitalito', price: 3000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500&q=80' },
    { id: 86, name: 'Llaveros Artesanales', price: 10000, category: 'artesanias', image_url: 'https://images.unsplash.com/photo-1522338242962-e6628469e5d4?w=500&q=80' },

    // Miel
    { id: 87, name: 'Miel + Café o Cacao', price: 16000, category: 'miel', image_url: 'https://images.unsplash.com/photo-1587049352851-8d4e891347ba?w=500&q=80' },
    { id: 88, name: 'Miel + Canela / Jamaica', price: 14000, category: 'miel', image_url: 'https://images.unsplash.com/photo-1587049352851-8d4e891347ba?w=500&q=80' },

    // Achiras
    { id: 89, name: 'Bizcochos Smantania (80g)', price: 5000, category: 'achiras', image_url: 'https://images.unsplash.com/photo-1601314115160-53eac3fcd77b?w=500&q=80' },
    { id: 90, name: 'Tosti Achiras (30g)', price: 2500, category: 'achiras', image_url: 'https://images.unsplash.com/photo-1601314115160-53eac3fcd77b?w=500&q=80' },

    // Antipasto
    { id: 91, name: 'Antipasto Vegano (250g)', price: 15000, category: 'antipasto', image_url: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=500&q=80' },
    { id: 92, name: 'Antipasto Berenjenas', price: 15000, category: 'antipasto', image_url: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=500&q=80' }
];
