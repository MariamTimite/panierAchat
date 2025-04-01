// Fonction pour calculer le prix total du panier
function updateTotalPrice() {
    const items = document.querySelectorAll('.panier-item');
    let total = 0;
    items.forEach(item => {
      const price = parseFloat(item.querySelector('.product-price').textContent.replace('FCFA', '').trim());
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    document.querySelector('.total-price').textContent = `${total.toFixed(2)}FCFA`;
  }
  
  // Ajouter un événement sur les boutons "+" et "-"
  document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', function() {
      const quantitySpan = this.previousElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    });
  });
  
  document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', function() {
      const quantitySpan = this.nextElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
      }
      updateTotalPrice();
    });
  });
  
  // Ajouter un événement pour supprimer un article
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.panier-item').remove();
      updateTotalPrice();
    });
  });
  
  // Ajouter un événement pour "aimer" un article (changement de couleur du cœur)
  document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('liked');
    });
  });
  
  // Initialisation du prix total à l'ouverture de la page
  updateTotalPrice();
  