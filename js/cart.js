function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("grand-total").innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const card = document.createElement("div");
    card.className = "row align-items-center border p-3 mb-3 bg-light rounded shadow-sm";

    card.innerHTML = `
      <div class="col-md-2 text-center">
        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="max-height: 100px;">
      </div>
      <div class="col-md-3">
        <h5>${item.name}</h5>
        <p class="text-muted">$${item.price.toFixed(2)}</p>
      </div>
      <div class="col-md-3 d-flex align-items-center">
        <button class="btn btn-sm btn-outline-secondary me-2" onclick="changeQuantity(${index}, -1)">−</button>
        <span>${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary ms-2" onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <div class="col-md-2">
        <strong>$${itemTotal.toFixed(2)}</strong>
      </div>
      <div class="col-md-2 text-end">
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartContainer.appendChild(card);
  });

  document.getElementById("grand-total").innerText = total.toFixed(2);
}

function changeQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Load cart when page is ready
document.addEventListener("DOMContentLoaded", loadCart);
