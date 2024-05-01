// Definimos una variable para almacenar los productos
let products = [];

// Función para agregar un nuevo producto
function addProduct(name, price) {
    const newProduct = {
        id: Date.now(), 
        name: name,
        price: price
    };
    products.push(newProduct);
    displayProducts();
}

// Función para eliminar un producto
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

// Función para mostrar los productos en la página
function displayProducts() {
    const productsSection = document.getElementById('productsSection');
    productsSection.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <button onclick="deleteProduct(${product.id})">Eliminar</button>
        `;

        productsSection.appendChild(productDiv);
    });
}


// Función para agregar un nuevo producto desde el formulario en la página web
function addProductFromForm() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName.trim() === '' || productPrice.trim() === '') {
        alert('Por favor, ingresa un nombre y un precio para el producto.');
        return;
    }

    addProduct(productName, parseFloat(productPrice));

    // Limpiamos los campos del formulario después de agregar el producto
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

// Ejemplo: Agregar algunos productos inicialmente
addProduct('Producto 1', 10);
addProduct('Producto 2', 20);