
    let cart = [];
    let total = 0;

    function addToCart(item, price, qtyId) {
      const qty = parseInt(document.getElementById(qtyId).value);
      if (qty < 1) return;

      cart.push({ item, qty, price });
      updateCart();
    }

    function updateCart() {
      const list = document.getElementById('cart-list');
      list.innerHTML = '';
      total = 0;

      cart.forEach((entry, index) => {
        const lineTotal = entry.qty * entry.price;
        total += lineTotal;
        const li = document.createElement('li');
        li.textContent = `${entry.item} x ${entry.qty} = $${lineTotal}`;
        list.appendChild(li);
      });

      document.getElementById('cart-total').textContent = total;
    }

    function placeOrder() {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      let summary = "Order Summary:\n";
      cart.forEach(entry => {
        summary += `${entry.item} x ${entry.qty} = $${entry.qty * entry.price}\n`;
      });
      summary += `Total: $${total}\n\nThank you for your order!`;

      alert(summary);
      cart = [];
      updateCart();
    }
