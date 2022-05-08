// find():
// The method find() is used to return the first array element that passes a certain test function.

// The find method takes a function as its parameter and the function itself takes three arguments: the element, the index, and the array itself.

//example:

let num = [2, 15, 18, 25];

num.find(function(element) {
  return element >= 18;
}); 
num.find(element => element >= 18)




// findIndex():

// The method findIndex is used to return the index of the first array element that passes a certain test function.

// The method findIndex also takes a callback function which can take three parameters(element, index, and array).

//example:

let numbers = [2, 10, 18, 25];

numbers.findIndex(function(element) {
  return element > 2;
}); 
numbers.findIndex(element => element > 2);
console.log(numbers)