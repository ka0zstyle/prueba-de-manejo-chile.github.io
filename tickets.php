<?php
// tickets.php - Sistema de tarjetas de tickets con cálculo de precio total

// Simulando datos de tickets/rifas compradas (en una aplicación real vendría de base de datos)
$tickets_comprados = [
    [
        'id_rifa' => 1,
        'nombre_rifa' => 'Rifa Smartphone Samsung Galaxy',
        'numero_boletos' => 5,
        'precio_boleto' => 10.50,
        'fecha_compra' => '2024-01-15'
    ],
    [
        'id_rifa' => 2,
        'nombre_rifa' => 'Rifa Laptop Gaming',
        'numero_boletos' => 3,
        'precio_boleto' => 25.00,
        'fecha_compra' => '2024-01-14'
    ],
    [
        'id_rifa' => 3,
        'nombre_rifa' => 'Rifa Bicicleta Montaña',
        'numero_boletos' => 8,
        'precio_boleto' => 15.75,
        'fecha_compra' => '2024-01-13'
    ],
    [
        'id_rifa' => 4,
        'nombre_rifa' => 'Rifa Televisor 55"',
        'numero_boletos' => 2,
        'precio_boleto' => 30.00,
        'fecha_compra' => '2024-01-12'
    ]
];

// Función para calcular el total
function calcular_total($numero_boletos, $precio_boleto) {
    return $numero_boletos * $precio_boleto;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Tickets - Sistema de Rifas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        
        .tickets-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .ticket-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-left: 5px solid #007bff;
            transition: transform 0.2s ease;
        }
        
        .ticket-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .ticket-header {
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 15px;
            margin-bottom: 15px;
        }
        
        .rifa-name {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        
        .fecha-compra {
            font-size: 12px;
            color: #666;
        }
        
        .ticket-details {
            margin-bottom: 15px;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .detail-label {
            color: #666;
            font-weight: 500;
        }
        
        .detail-value {
            color: #333;
            font-weight: bold;
        }
        
        .total-section {
            border-top: 2px solid #f0f0f0;
            padding-top: 15px;
            text-align: center;
        }
        
        .total-label {
            font-size: 16px;
            color: #666;
            margin-bottom: 5px;
        }
        
        .total-amount {
            font-size: 24px;
            font-weight: bold;
            color: #28a745;
        }
        
        .no-tickets {
            text-align: center;
            color: #666;
            font-size: 18px;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Mis Tickets Comprados</h1>
        
        <?php if (empty($tickets_comprados)): ?>
            <div class="no-tickets">
                <p>No tienes tickets comprados aún.</p>
            </div>
        <?php else: ?>
            <div class="tickets-grid">
                <?php foreach ($tickets_comprados as $ticket): ?>
                    <?php $total = calcular_total($ticket['numero_boletos'], $ticket['precio_boleto']); ?>
                    
                    <div class="ticket-card">
                        <div class="ticket-header">
                            <div class="rifa-name"><?php echo htmlspecialchars($ticket['nombre_rifa']); ?></div>
                            <div class="fecha-compra">Comprado el: <?php echo date('d/m/Y', strtotime($ticket['fecha_compra'])); ?></div>
                        </div>
                        
                        <div class="ticket-details">
                            <div class="detail-row">
                                <span class="detail-label">Número de boletos:</span>
                                <span class="detail-value"><?php echo $ticket['numero_boletos']; ?></span>
                            </div>
                            
                            <div class="detail-row">
                                <span class="detail-label">Precio por boleto:</span>
                                <span class="detail-value"><?php echo number_format($ticket['precio_boleto'], 2); ?> Bs.</span>
                            </div>
                            
                            <div class="detail-row">
                                <span class="detail-label">Cálculo:</span>
                                <span class="detail-value"><?php echo $ticket['numero_boletos']; ?> × <?php echo number_format($ticket['precio_boleto'], 2); ?> Bs.</span>
                            </div>
                        </div>
                        
                        <div class="total-section">
                            <div class="total-label">Total:</div>
                            <div class="total-amount"><?php echo number_format($total, 2); ?> Bs.</div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>