//Q21

//let numbers = [5, 12, 8, 20, 3, 15, 7, 25];
//let count = 0;
//for (let i = 0; i < numbers.length;i++){

  //if (numbers[i] < 10) {
    //count++;
//}
//};
//console.log(count);

//Q22

// function countWordVowels(word) {
//   let count = 0;
//   let lowwerWord = word.toLowerCase();

//   for (let i = 0; i < word.length; i++){

//     let char = lowwerWord[i];

//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       count++

//     }
// }
//   return count;

// }

// console.log(countWordVowels('bram bath'));

//PRACTICE 1

// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {

//     console.log(numbers[i]);

// }
//PRACTICE 2

// let numbers = [5, 12, 8, 20, 3, 15];

// for (let i = 0; i < numbers.length;i++) {

//   if (numbers[i] > 10) {

//         console.log(numbers[i]);

//     }

// }
//  PRACTICE 3


// let numbers = [5, 12, 8, 20, 3, 15];
// let count = 0;
// for (let i = 0; i < numbers.length;i++){

//   if (numbers[i] > 10) {
//     count++;

//   }
// };
// console.log(count);
// PRACTICE 4
// let numbers = [3, 8, 12, 7, 15, 20, 21, 30];
// let count = 0;
// for (let i = 0; i < numbers.length;i++ ){

//   if (numbers[i] % 2 === 0) {
//     count++;
//   }
// };
// console.log(count);
//PRACTICE 5 Add numbers

// let numbers = [10, 20, 30, 40];
// let total = 0;
// for (let i = 0; i < numbers.length; i++){
//   total += numbers[i];
// }
// console.log(total);

//PRACTICE 6 Add only even numbers

// let numbers = [2, 5, 8, 11, 14, 17, 20];
// let total = 0;

// for (let i = 0; i < numbers.length;i++){

//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }


// };
//console.log(total);
//PRACTICE 7 Find the largest number
// let numbers = [12, 45, 7, 89, 23, 56];
// let largest = numbers[0];

// for (let i = 0; i < numbers.length;i++){

//   if (numbers[i] > largest) {
//   largest = numbers[i];

//   }
// };

// console.log(largest);
//Practice 8 — Find the smallest

// let numbers = [12, 45, 7, 89, 23, 56];
// let smallest = numbers[0];

// for (let i = 0; i < numbers.length;i++){
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// };
// console.log(smallest);

//Practice 9 — Build a new array
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = [];

// for (let i = 0; i < numbers.length;i++){
//   newNumbers.push(numbers[i]*10);
// };

// console.log(newNumbers);
// why didnt it work when i put the if statement in the for loop?
//Mini tests
// Test A Print every item:
// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length;i++){
//   console.log(numbers[i]);
// };
//Test B Count numbers greater than 10:

// let numbers = [5, 12, 8, 20, 3, 15];
// let count = 0;

// for (let i = 0; i < numbers.length;i++){
//   if (numbers[i] > 10) {
//     count++;
//   }
// };
// console.log(count);
//Test C Add only the even numbers:

// let numbers = [2, 5, 8, 11, 14, 17, 20];
// let total = 0;
// for (let i = 0; i < numbers.length;i++){
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// };
// console.log(total);
//Test D. Find the largest:
// let numbers = [12, 45, 7, 89, 23, 56];
// let largest = 0;
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// };
// console.log(largest);


//23. Reverse a word

// let word = "hello";

// for (let i = 4; i >= 0; i--){
//   console.log(word[i]);
// };
//24. Find a specific number

// let numbers = [4, 8, 15, 16, 23, 42];

// for (let i = 0; i < numbers.length;i++){
//   if (numbers[i] === 23 || numbers[i] === 4 ) {
//     console.log(numbers[i]+" was found")
//   }

// };
//25. FizzBuzz 🔥


for (let i = 0; i < 100;i++){
  if (i % 3 ===0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz")
  } else {
    console.log(i)
  }
};
