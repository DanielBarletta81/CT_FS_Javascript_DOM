// Task 2: Write JavaScript code to dynamically change
// the color of the box element when clicked.


// Attach the event listener to the box element



document.addEventListener('click', function(event) {
    if (event.target.id === '.box') {
      changeColor();
    }
  });


  function changeColor() {
    const randomColor = getRandomColor();
    const boxElement = document.getElementById('box');
    boxElement.style.background = randomColor;
  
    // Function to generate a random color
  
  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    console.log("Random Color:", randomColor);
  };



//Task 3: Implement additional styling changes based on user interaction, such as mouse hover
 //effects or button clicks on different HTML elements.



// Add event listeners after the DOM is loaded

document.addEventListener('mouseenter', () => {
  changeColor();
  });
 



 function changeColor() {
    const randomColor = getRandomColor();
    elementIds = ['name', 'email', 'message']; //update after the DOM is loaded.

  elementIds.forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = randomColor;
        // change background color on mouse enter

      });
    }

});

    // Function to generate a random color


  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    console.log("Random Color:", randomColor);
  };


  
  elementIds = [];

 document.addEventListener('mouseleave', function(event) {
    if (event.target.id === 'name'|| 'email' || 'message') {
      changeColorBack();
    }
  });
   
  //update after the DOM is loaded.

  elementIds.forEach(id => {
    const element = document.getElementById(id);
  
    if (element) {
      element.addEventListener('mouseleave', () => {
        // change background color on mouse leave
       changeColorBack();
      });
    }
  });
  console.log(elementIds);  // log the array

// change background color back to white
function changeColorBack(element) {
    if(element) {
        element.style.backgroundColor = 'white';
        console.log("Color Changed Back");
    }
};



  document.addEventListener('click', function(event) {
    if (event.target.id === 'button') {
      growButton();

    }
  });

  function growButton() {
    const buttonElement = document.getElementById('button');
    if (buttonElement) {
        buttonElement.style.width = '150px';
        buttonElement.style.height = '50px';
        console.log("Button Grown");
    }
};

