let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    updateCart();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} тг.`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = totalPrice;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    alert('Заказ оформлен на сумму: ' + totalPrice + ' тг');
    cart = [];
    updateCartCount();
    updateCart();
    toggleCart();
}
