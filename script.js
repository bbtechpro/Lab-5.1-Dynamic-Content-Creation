//Add Products:

// Test adding products with different names and prices.
// Ensure each product appears in the list with the correct price.
// Remove Products:

// Test removing products from the cart.
// Verify that the total price updates accurately after removing items.
// Edge Cases:

// Attempt to add products with empty names or invalid prices and ensure the application handles these cases gracefully.
// Enhance the App (Optional):

// Allow users to update the quantity of products in the cart and recalculate the total price.

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);
  if (!name || isNaN(price)) {
    alert('Please enter valid product information.');
    return;
  }
  const item = document.createElement('li');
  item.textContent = `${name}: $${price.toFixed(2)}`;
  item.dataset.price = price;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', removeItem);
  const updateQuantityButton = document.createElement('button');
  updateQuantityButton.textContent = 'Update Quantity';
  updateQuantityButton.addEventListener('click', updateQuantity);
  item.appendChild(removeButton);
  item.appendChild(updateQuantityButton);
  cart.appendChild(item);
  updateTotalPrice(price);
  productNameInput.value = '';
  productPriceInput.value = '';
});
//the update quantity function is not working properly, it is not updating the quantity and price correctly. It is also not updating the total price correctly. I need to fix this function to make it work properly.
function updateQuantity(event) {
  const item = event.target.closest('li');
//   const updateQuantityButton = item.querySelector('button');
  updateQuantityButton.textContent = 'Update Quantity';
  const newQuantity = parseInt(prompt('Enter new quantity:'));
  if (isNaN(newQuantity) || newQuantity < 1) {
  alert('Please enter a valid quantity.');
  return;
  }
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.quantity();
    item.dataset.price = (price / item.dataset.quantity) * newQuantity;
    item.textContent = `${item.dataset.name}: $${parseFloat(item.dataset.price).toFixed(2)}`;
    updateTotalPrice(parseFloat(item.dataset.price));
}

