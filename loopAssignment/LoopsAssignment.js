// Function to calculate the sum of the first n even numbers using a for loop
function sumOfFirstNEvens(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}
// Function to print only the even numbers from an array
function printEvenNumbers(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
// Function to remove even numbers from an array and return the odd numbers
function filterOddNumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 !== 0; });
}
// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    var pi = 3.14159265359; // You can also use Math.PI
    return pi * radius * radius;
}
// Function to remove failing grades (below 50) from an array
function removeFailingGrades(grades) {
    return grades.filter(function (grade) { return grade >= 50; });
}
// Test cases
var n = 5;
console.log("Sum of the first ".concat(n, " even numbers: ").concat(sumOfFirstNEvens(n)));
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
printEvenNumbers(numbersArray);
console.log("Odd numbers in the array after filtering:");
var oddNumbersArray = filterOddNumbers(numbersArray);
console.log(oddNumbersArray);
var radius = 5;
console.log("Area of a circle with radius ".concat(radius, ": ").concat(calculateCircleArea(radius)));
var gradesArray = [85, 42, 63, 78, 31, 56, 92, 47];
console.log("Grades after removing failing grades:");
var passingGradesArray = removeFailingGrades(gradesArray);
console.log(passingGradesArray);
