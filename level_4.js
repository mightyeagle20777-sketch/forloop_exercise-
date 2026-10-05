//Q16
//let fruits = ["apple", "banana", "orange", "grape"];
//for (let fruit = 0; fruit < fruits.length; fruit++){
//console.log(fruits[fruit]);
//};

//Q17

//let fruits = ["apple", "banana", "orange", "grape"];
//for (let i = 0; i < fruits.length ;i++ ){
//console.log(i);
//};

//Q18
//let fruits = ["apple", "banana", "orange", "grape"];
//for (let i = 0; i < fruits.length; i++) {
//console.log(i,fruits[i]);
//};

//Q19

//let numbers = [10, 20, 30, 40, 50];
//let total = 0;
//for (let i = 0; i < numbers.length;i++){
//total = total + numbers[i];
//};
//console.log(total);

//Q20

let numbers = [12, 45, 7, 89, 23, 56];

let largest = numbers[0];

for (let i = 1; i < numbers.length;i++){

  if (numbers[i] > largest) {
    largest = numbers[i];
  }
};
console.log(largest);
