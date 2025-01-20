
/* Task 1: Create an array containing information about different products, including their
 names, prices, and descriptions.
 */

// Array containing product data
const products = [
    {name: "Laptop", price: 999.99, description: "Powerful computing on the go"},
    {name: "Smartphone", price: 699.99, description: "Stay connected wherever you are"},
    {name: "Headphones", price: 149.99, description: "Immersive audio experience"},
    {name: "iPad", price: 999.99, description: "Portable computing at its finest"},
    {name: "Smartwatch", price: 599.99, description: "Stay healthy and punctual with this smartwatch" },
    {name: "Xylophone", price: 49.99, description: "Because...why not?"},
    {name: "Ornate Lamp", price: 249.99, description: "Lamp with swirling patterns."}
    
  ];

  // Task 2: Write a function to display the product information on the webpage dynamically.

  function displayProduct(product) { //This takes a single product argument
    const productContainer = document.getElementById('product-container');

    if (!productContainer) {
      console.error("Element with ID 'product-container' not found.");
      return;
    }

    // Create product elements dynamically for display.
    const productDiv = document.createElement('div');
    const productName = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productDetails = document.createElement('p');

    // Set content
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDetails.textContent = product.description;

    // Add product div to the container
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDetails);

    // Add product div to the container
    productContainer.appendChild(productDiv);
  }

  function displayProducts(products){ //Now this is called to loop over the array of products
        if (!products) {
          console.error("Invalid 'products' array.");
          return;
      }
      products.forEach(product => { //using forEach to access each item in the array
          displayProduct(product); //Send each product display function
      });
  }

  // Task 3: Implement an event listener to trigger
  // the display of products when the page loads.

  document.addEventListener('DOMContentLoaded', function() {
    console.log("Products:", products); // Log product data
    displayProducts(products)
  });

