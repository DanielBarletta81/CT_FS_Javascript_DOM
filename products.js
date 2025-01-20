

/* Task 1: Create an array containing information about different products, including their
 names, prices, and descriptions.
 */



let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];




// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProduct(productData) {
  const productContainer = document.getElementById('product-container');

     // Create product elements dynamically for display.

  const productDiv = document.createElement('div');

  const productName = document.createElement('h3');

  const productPrice = document.createElement('p');

  const productDetails = document.createElement('p');

  // Set content
    productName.textContent = productData.name;
    productPrice.textContent = productData.price;
    productDetails.textContent = productData.description;

    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDetails);

  // Add product div to the container
    productContainer.appendChild(productDiv);
}

const product1 = {
    name: "Ornate Lamp",
    price: 250,
    description: "Lamp with swirling patterns."
};

console.log(product1);
displayProduct(product1);


// Task 3: Implement an event listener to trigger the display of products when the page loads.
