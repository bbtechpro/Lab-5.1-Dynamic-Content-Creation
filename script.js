const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

const cartItemClass =
  'flex flex-wrap items-center gap-2 py-3 px-4 bg-white rounded-lg border border-slate-200 shadow-sm';
const cartInfoClass = 'flex-1 min-w-[12rem] text-sm font-medium text-slate-800';
const qtyBtnClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 text-lg font-medium leading-none transition';
const removeBtnClass =
  'ml-auto rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 border border-red-200 hover:bg-red-100 transition';

let totalPrice = 0;

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Edge Case: Validation
  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  let quantity = 1;
  const item = document.createElement('li');

  // Create UI Elements for the row
  const infoText = document.createElement('span');
  infoText.textContent = `${name}: $${price.toFixed(2)} (x${quantity})`;
  infoText.className = cartInfoClass;

  const subBtn = document.createElement('button');
  subBtn.type = 'button';
  subBtn.textContent = '-';
  subBtn.className = qtyBtnClass;

  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.textContent = '+';
  addBtn.className = qtyBtnClass;

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = 'Remove';
  removeBtn.className = removeBtnClass;

  // Increment Logic
  addBtn.onclick = () => {
    quantity++;
    infoText.textContent = `${name}: $${price.toFixed(2)} (x${quantity})`;
    updateTotalPrice(price);
  };

  // Decrement Logic
  subBtn.onclick = () => {
    if (quantity > 1) {
      quantity--;
      infoText.textContent = `${name}: $${price.toFixed(2)} (x${quantity})`;
      updateTotalPrice(-price);
    }
  };

  // Remove Logic
  removeBtn.onclick = () => {
    updateTotalPrice(-(price * quantity));
    item.remove();
  };

  // Build the list item
  item.className = cartItemClass;
  item.append(infoText, subBtn, addBtn, removeBtn);
  cart.appendChild(item);

  // Initial Update
  updateTotalPrice(price);

  // Clear Inputs
  productNameInput.value = '';
  productPriceInput.value = '';
});
