// Example: (!4) Factorial,     denoted as 5!, is 5 x 4 x 3 x 2 x 1 which equals 120. 

// CHALLENGE: Factorial of a number

// solution A : RECURSIVE 
// function factorial(n) {
//  if (!n) return 1; 
//  return n * factorial(Math.abs(n) - 1)
// }

// solution B : RECURSIVE Tail-Optimization
function factorial(n, productTotal = 1) {
    if (!n) return productTotal; 
    return factorial(Math.abs(n) - 1, productTotal *= n ); 
}

// Solution for-loop
// function factorial(num) {
//    let product = 1; 
//     if (!num) return product; 
//     for(let i = num; i > 0; i--) {
//     product *= i; 
//  }
//  return product; 
// }

// solution while-loop
// const factorial = (n) => {
//     let product = 1; 
//     if (!n) return product; 
//     while (n > 0) {
//         product *= n; 
//         n = n - 1; 
//     }
//     return product; 
// }

// Test cases: 
// console.log(factorial());   // 1
// console.log(factorial(0));  // 1
// console.log(factorial(2));  // 2
// console.log(factorial(5));  // 120
// console.log(factorial(-7)); // -5040


 
// Write a recursive function called productOfArray that takes in an array of numbers and returns the product of all of the elements.

// CHALLENGE: Product of an array

// Solution : RECURSIVE Tail-Optimization
// function productOfArr(arr, output = 1) {
//  if(!arr.length) return output; 
//  return productOfArr(arr.splice(1), output *= arr[0]); 
// };

// Solution 2: RECURSION
// function productOfArr(arr, i = 1) {
//     if (!arr) return 1; 
//     return arr[i] * productOfArr(arr[i], i + 1); 
// }

// Solution : Reduce High-Order Function  
// const productOfArr = (arr) => arr.reduce((acc, currNum) => acc *= currNum, 1); 

// Solution : For-of Loop 
// function productOfArr(arr) {
//     let product = 1; 
//     for (let num of arr ){ 
//         product *= num; 
//     }
//     return product; 
// }

// console.log(productOfArr([])); // 1
// console.log(productOfArr([2, 3, 4])); // 24
// console.log(productOfArr([2, -3, 5, 6, 9])); // -1620
 


// BONUS CHALLENGE TIME: Try Yourself doing a sum of array! 

// Write a recursive function sum that calculates the sum of an array of integers.

// function sum(array, acc = 0) {
// 	if (!array.length) return acc; 
//   return sum(array.splice(1), acc += array[0]); 
// }
// HOF Solution : Sum of array
// const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0); 

//  console.log(sum([])) // 0
//  console.log(sum([1,4,6])); // -> returns 11
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21









// CHALLENGE: Reverse a string

























// CHALLENGE: Reverse a number

// CHALLENGE: Sum in Range


// CHALLENGE: Sum of numbers in Arr


// CHALLENGE: Count letter in string occurance 

// CHALLENGE: Count words

// CHALLENGE: Countdown recursion

// CHALLENGE: Calculate Average / Mean

// CHALLENGE: Diffrence two arrays

// CHALLENGE: Double even in array

// CHALLENGE: Extend objects add property

// CHALLENGE: Search and Destory

// CHALLENGE: Remove Duplicates

// CHALLENGE: Mode of an Array  =>  find the mode: the number that is found the most,    if the number has a tie return the bigger number. 





// CHALLENGE: Nested Arr

// CHALLENGE: Neste
