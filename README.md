In this lab, you will create a dynamic shopping cart application to practice and reinforce your DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price. This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

Workplace Context
Imagine you are tasked with building the shopping cart feature for an e-commerce website. Customers should be able to:

Add items to their cart dynamically.
View the items they have added, along with their prices and quantities.
Update the quantity of items in the cart, reflecting real-time price changes.
Remove items from the cart.
This lab will help you simulate and build core functionality used in modern e-commerce applications.

Objectives
By the end of this lab, you will:

Dynamically create and manipulate DOM elements to build interactive features.
Update the DOM to reflect changes in user input, such as quantity updates and price calculations.
Use event handling to implement interactivity for adding, updating, and removing items.
Use efficient DOM manipulation techniques to minimize performance bottlenecks.

Reflection Questions:
How did you dynamically create and append new elements to the DOM?
- In my index.html file I created these initial elements in the DOM:
    <div id="product-container"
      <input type="text" id="product-name" placeholder="Product name"
      <input type="number" id="product-price" placeholder="Price" step="0.01" min="0"
      <button type="button" id="add-product" Add Product</button>
    </div>
    <ul id="cart" class="space-y-3 list-none p-0"></ul>
    <h3 class="text-lg font-semibold pt-4 border-t border-slate-200">
      Total:
      <span class="tabular-nums text-indigo-600">$<span id="total-price">0</span></span>
    </h3>
 - Then in my script.js file I slected the following variables to pull the input from the HTML elements:
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const addProductButton = document.getElementById('add-product');
    const cart = document.getElementById('cart');
    const totalPriceSpan = document.getElementById('total-price');

What steps did you take to ensure accurate updates to the total price?
- I used template literals to help ensure accurate updates to the total price:
addBtn.onclick = () => {
    quantity++;
    infoText.textContent = `${name}: $${price.toFixed(2)} (x${quantity})`;
    updateTotalPrice(price);
  };

  subBtn.onclick = () => {
    if (quantity > 1) {
      quantity--;
      infoText.textContent = `${name}: $${price.toFixed(2)} (x${quantity})`;
      updateTotalPrice(-price);
    }


How did you handle invalid input for product name or price?
 - I used the following conditional statement to handle validation of input for product name and price:
  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;

What challenges did you face when implementing the remove functionality?
 - I had to figure out the placement of the removeBtn function to make sure the cart would be updated appropriately. I wound up simplifying the logic to build the list and update the removed items along with the other appended items.
 item.className = cartItemClass;
  item.append(infoText, subBtn, addBtn, removeBtn);
  cart.appendChild(item);