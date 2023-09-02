// Function to calculate the sum of the first n even numbers using a for loop
function sumOfFirstNEvens(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 2 * i;
  }
  return sum;
}

// Function to print only the even numbers from an array
function printEvenNumbers(numbers: number[]): void {
  for (const num of numbers) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

// Function to remove even numbers from an array and return the odd numbers
function filterOddNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 !== 0);
}

// Function to calculate the area of a circle
function calculateCircleArea(radius: number): number {
  const pi = 3.14159265359; // You can also use Math.PI
  return pi * radius * radius;
}

// Function to remove failing grades (below 50) from an array
function removeFailingGrades(grades: number[]): number[] {
  return grades.filter((grade) => grade >= 50);
}

// Test cases
const n = 5;
console.log(`Sum of the first ${n} even numbers: ${sumOfFirstNEvens(n)}`);

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
printEvenNumbers(numbersArray);

console.log("Odd numbers in the array after filtering:");
const oddNumbersArray = filterOddNumbers(numbersArray);
console.log(oddNumbersArray);

const radius = 5;
console.log(
  `Area of a circle with radius ${radius}: ${calculateCircleArea(radius)}`
);

const gradesArray = [85, 42, 63, 78, 31, 56, 92, 47];
console.log("Grades after removing failing grades:");
const passingGradesArray = removeFailingGrades(gradesArray);
console.log(passingGradesArray);
