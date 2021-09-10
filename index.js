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
function productOfArr(arr, output = 1) {
 if(!arr.length) return output; 
 return productOfArr(arr.splice(1), output *= arr[0]); 
};

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

// CHALLENGE: Sum of numbers in Arr

function sum(array, acc = 0) {
	if (!array.length) return acc; 
  return sum(array.splice(1), acc += array[0]); 
}
// HOF Solution : Sum of array
// const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0); 

// using while-loop 
// function sum(array) {
//     let acc = 0; 
//     while (array.length > 0) {
//       acc += Number(array.splice(0,1))
//     }
//     return acc; 
//   }

// using for-of 
// function addAllNumbers(array) {
//     let sum = 0; 
//     for(let num of array) {
//       sum += num; 
//     }
//       return sum; 
//   }


//  console.log(sum([])) // 0
//  console.log(sum([1,4,6])); // -> returns 11
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21



// CHALLENGE: Reverse a string 
 // Native Method solution
 // const reversed = (str) => [...str].reverse().join(''); 

 // For-Loop Solution
// function reversed(str) {
//     let reversed = ''; 
//     for (let i = str.length-1; i > 0; i--) {
//         reversed += str[i]; 
//     }
//     return reversed; 
// }
 
// Reverse in place using recursion
function reversed(string) {
    if (!string) return '';  // if the string is empty return an empty string
    return reversed(string.slice(1)) + string[0]; 
}
// console.log(reversed('helP'));  // PleH
// console.log(reversed('reversE'));  // Esrever


// CHALLENGE: Reverse a number

// convert the integer into a string and spread it into an array

// Solution: ES^6 syntax applying JSON.stringify() and methods
const reverseNum = (num) => [...JSON.stringify(num)].reverse().join(''); 
 
// const reverseInt = (int) =>   {
//     const num = [...String(int)].reverse().join('');
//     return parseInt(num);  
// }

 // BONUS Challenge:  Given a positive number reverse all the digits WITHOUT CONVERTING the number to a string!
 function reverseInt(int) {
     let revNum = 0;
     while (int > 0) {
         revNum = (revNum * 10) +  (int % 10); 
         int = Math.floor(int / 10);
     }
     return revNum; 
 }

// console.log(reverseInt(41)); //14
// console.log(reverseInt(12345)); // 54321
// console.log(reverseInt(87654)) //45678
// console.log(reverseInt(2032)); // 2302




// Q. Sum All Numbers in a Range

// input: array of two numbers Return the sum of those two numbers plus the sum of all the numbers between them. 

// EXAMPLE:     1 + 2 + 3 + 4 : 10
// sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


// ** The lowest number will not always come first.

// CHALLENGE: Sum in Range 
    // pass in an array as an argument 
    // find the smallestNum
    // find the largestNum

// Recusion Solution 

function sumAllInRange(arr) {
    let rangeSum = 0; 
    if (!arr.length) return [];
    let maxNum = arr.reduce((acc, curr) => Math.max(acc, curr)); 
    let minNum = arr.reduce((acc, curr) => Math.min(acc, curr));  
    for (let i = minNum; i < maxNum; i++) {
        rangeSum += i; 
    }
    return rangeSum; 
}

// For-loop Solution 

// function sumAllInRange(arr) {
//     let max = arr[0]; 
//     let min = arr[1]; 
//     let sumRange = 0;
//     let i;  
//     for (i = 0; i < arr.length; i++) { 
//         if (arr[i] > max) {
//             max = arr[i]; 
//         }
//     }
//     for (i = 0; i < arr.length; i++) { 
//         if (arr[i] < min) {
//             min = arr[i]; 
//         }
//     }
    
//     for (let i = min; i < max; i++) {
//         sumRange += i; 
//     }
//     return sumRange; 
// }


// console.log(sumAllInRange([])); 
// console.log(sumAllInRange([1, 5])); // 10
// console.log(sumAllInRange([5, 1])); // 10
// console.log(sumAllInRange([7, 1])); 
// console.log(sumAllInRange(([1, 7])));
// console.log(sumAllInRange(([6, 369])));
// console.log(sumAllInRange(([369, 6])));

// CHALLENGE: Count letter in string occurance 

function countLetter(str) {
   let cache = {}; 
    for(let i = 0; i < str.length; i++) {
        if(!cache[str[i]]) {
            cache[str[i]] = 1; 
        }else {
            cache[str[i]] += 1; 
        }
    }
   return cache; 
}

// using a HOF
// function countLetter(str) {
// let obj = {}; 
// [...str].forEach(function(elem) {
//   if(obj[elem]) {
//       obj[elem] += 1; 
//   }else{
//       obj[elem] = 1; 
//   }
// }); 
//     return obj; 
// }

// console.log(countLetter('')); // {} 
// console.log(countLetter('Coffee')); // { C: 1, o: 1, f: 2, e: 2 }
// console.log(countLetter('member')); // { m: 2, e: 2, b: 1, r: 1 }

 

// Q. 'Number of occurrances of a given char in a string'
function counterCharacter(sentence, str) {
    let counter = 0; 
    let words = ''; 
    for (let word of sentence) {
        if ( word === str) {
            words += str;
            counter++; 
        }
    }
    return `${words} : ${counter}`; 
}

console.log(counterCharacter("Pizza is goodz", "z")); 









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
