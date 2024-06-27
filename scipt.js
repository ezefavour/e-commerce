

















/*document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const paymentSection = document.getElementById('payment');
    const paymentTotalElement = document.getElementById('payment-total');
    const payNowButton = document.getElementById('pay-now');
    const successSection = document.getElementById('success');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);

            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });

    checkoutButton.addEventListener('click', () => {
        document.querySelector('main').style.display = 'none';
        paymentSection.style.display = 'block';
        paymentTotalElement.textContent = totalElement.textContent;
    });

    payNowButton.addEventListener('click', () => {
        paymentSection.style.display = 'none';
        successSection.style.display = 'block';
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((product) => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${product.name} - $${product.price}`;
            cartItemsContainer.appendChild(cartItem);
            total += product.price;
        });

        totalElement.textContent = total.toFixed(2);
    }
});
