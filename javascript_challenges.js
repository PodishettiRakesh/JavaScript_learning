// Advanced Variables and Data Types
// MANUPULATE ARRAYS:

// Add an element to the beginning of an array.
// let arr=["raki","rakesh","rakhi","keerthi"]
// let arr2=["hemanth","kavya"]
// arr.unshift("ramu")
// console.log(arr.concat(arr2));
// arr.forEach(function(item){
//     console.log(item+item)
// });

// let num=[1,2,3,4]
// let dou=num.map(function(number){
//     return number*2;
// });
// console.log(dou)
// let evens=num.reduce(function(total,num){
//     return total+num;
// });
// console.log(num)
// console.log(evens);



// Remove the last element from an array.
// let numbers=[3,4,5,5,6,7]
// console.log(numbers.pop())
// console.log(numbers)


// Find the index of a specific element in an array
// console.log(numbers.indexOf(7))


// WORK WITH OBJECTS
// Create an object to store information about a book (title, author, year, genre). Add a method to print a description of the book.
let book={
    title:"pavanKalyan",
    author:"rakesh",
    year: 2024,
    genre: "history",
    descript: function(){
        console.log(`${this.title} written by ${this.author}`)
    }
};
// book.descript();

// Merge two objects into a new object.
let book1 = {
    title: "Pavan Kalyan",
    author: "Rakesh",
    year: 2024,
    genre: "History",
    cast: ["jagan","kaPaul"]
};
let book2={
    title:"chandrababuNaidu",
    year: 2023,
    genre: "politics",
}

let merged={
    ...book1,
    ...book2
};
// console.log(merged)


// Adding and Modifying Properties:
let student={};
student.name="rakesh";
student.age=23;
student.roll=2023;
console.log(student);
student.age=45;
student.roll=203;
console.log(student)



















/*

More Data Conversions
Conversions:
Convert a date object to a string and print the result.
Convert an array to a string and print the result.
Convert a string to an array and print the result.
Additional Operators
Math Operations:
Write a program that calculates the power of a number.
Write a program that calculates the square root of a number.
More Conditionals
Complex Conditionals:
Write a program that checks if a year is a leap year.
Write a program that takes three angles of a triangle and checks if it's a valid triangle.
Advanced Loops
Nested Loops:
Write a program that prints a multiplication table for numbers 1 to 10.
Write a program that prints all prime numbers between 1 and 50.
Functions
Function Practice:
Write a function that takes an array and returns the sum of its elements.
Write a function that takes two dates and returns the number of days between them.
Write a function that returns the longest word in a string.
Array Methods
Array Methods:
Write a program that sorts an array of numbers in ascending order.
Write a program that filters out all odd numbers from an array.
String Methods
String Methods:
Write a program that counts the number of vowels in a string.
Write a program that capitalizes the first letter of each word in a string.
Bonus Challenges
Bonus Challenges:
Write a program that checks if a string is a palindrome.
Write a function that flattens a nested array.
Write a program that implements a basic calculator with functions for addition, subtraction, multiplication, and division.
Write a program that creates a to-do list where you can add, remove, and list tasks.
Feel free to ask for help or hints if you get stuck on any of these problems!
*/





