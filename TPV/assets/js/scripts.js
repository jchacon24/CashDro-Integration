document.getElementById('new-product-btn').addEventListener('click', function() {
    const nombre = prompt("Nombre del producto:");
    const precio = prompt("Precio del producto:");
    const imagen = prompt("URL de la imagen del producto:");

    if (nombre && precio && imagen) {
        const productData = {
            nombre: nombre,
            precio: parseFloat(precio),
            imagen: imagen
        };

        fetch('includes/add_product.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Producto registrado exitosamente");
                loadProducts(); // Recarga la lista de productos
            } else {
                alert("Error: " + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert("Todos los campos son obligatorios.");
    }
});
