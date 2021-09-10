// Example: (!4) Factorial,     denoted as 5!, is 5 x 4 x 3 x 2 x 1 which equals 120. 

// CHALLENGE: Factorial of a number
// solution A : RECURSIVE 
// function factorial(n) {
//  if (!n) return 1; 
//  return n * factorial(Math.abs(n) - 1)
// }

// solution B : RECURSIVE Tail-Optimization
// function factorial(n, productTotal = 1) {
//     if (!n) return productTotal; 
//     return factorial(Math.abs(n) - 1, productTotal *= n ); 
// }

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
const factorial = (n) => {
    let product = 1; 
    if (!n) return product; 
    while (n > 0) {
        product *= n; 
        n = n - 1; 
    }
    return product; 
}

// Test cases: 
// console.log(factorial());   // 1
// console.log(factorial(0));  // 1
// console.log(factorial(2));  // 2
// console.log(factorial(5));  // 120
// console.log(factorial(-7)); // -5040






























// CHALLENGE: Product of an array





















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
