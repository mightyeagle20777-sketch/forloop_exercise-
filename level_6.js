let students = [
    { name: "Thabo", age: 18, mark: 75 },
    { name: "Lerato", age: 20, mark: 88 },
    { name: "Sipho", age: 19, mark: 45 },
    { name: "Amara", age: 21, mark: 92 },
    { name: "Zanele", age: 18, mark: 63 }
];
//Use a for loop to print every student's name.

// for (let i = 0; i < students.length;i++){
//   console.log(students[i].name);
// };
//Print the names of students whose mark is at least 50

// for (let i = 0; i < students.length;i++){
//   if (students[i].mark > 50) {
//     console.log(students[i].name);
//   }
// };
//Create a function called countPassing(students) that returns how many students scored at least 50.

// function countPassing(students) {

//   let count = 0;
//   for (let i = 0; i < students.length; i++){
//     if (students[i].mark >= 50) {
//       count++;
//     }

//   }
//   return count;
// };
// console.log(countPassing(students));

//Create a function called calculateAverage(students) that returns the average mark

// function calculateAverage(students) {
//   let total = 0;
//   for (let i = 0; i < students.length; i++) {
//     total += students[i].mark;
//   }
//   return total / students.length;

// };
// console.log( calculateAverage(students));
//Create a function called findTopStudent(students) that returns the entire object of the student with the highest mark. Do not use Math.max().
function findTopStudent(students) {
  let total = 0;
  for (let i = 0; i < students.length; i++){

    if ( students[i].mark > total ) {
       total = students[i].mark;
    }
  }
    return total;

};
console.log(findTopStudent(students));
