let cart = [];

function addToCart(product) {
  cart.push(product);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang Anda kosong!");
  } else {
    alert("Terima kasih telah berbelanja! Anda telah melakukan checkout.");
    cart = [];
    displayCart();
  }
}
