// variabel + alert
var myVariable = document.querySelector('h1');
alert(myVariable.textContent);

// ganti text yg ada di dalam H1
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// kondisi dengan if else
var iceCream = 'dddd';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

// function
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

// jalankan function dengan nilai parameter
document.querySelector('h2').innerHTML = multiply(0.5,7);
