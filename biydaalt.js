// Cart data structure to store products
let cart = [];

// Function to handle adding items to the cart
function addToCart(productName, productPrice, productImage) {
    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to display the cart
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current cart

    // Loop through cart items and display them
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
    });
}

// Function to open the cart modal
function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

// Function to close the cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Function for the checkout process (you can implement your own logic)
function checkout() {
    alert("Proceeding to checkout...");
    // Add checkout logic here
}

// Attach the "Add to Cart" functionality to your product buttons
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('.card-title').textContent;
        const productPrice = productCard.querySelector('.text-muted').textContent.replace('$', '');
        const productImage = productCard.querySelector('img').src;

        addToCart(productName, parseFloat(productPrice), productImage);
    });
});
