// Variables and Data Types
// Create a variable to store your name and print it to the console.
let myName="Podishetti Rakesh";
console.log(myName)

// Declare and initialize variables of different data types: string, number, boolean, null, and undefined. Print each one to the console.
// let x=4;
// let y="java"
// let f=4.5;
// let z;
// let b=true;
// let a = null;
// console.log(x)
// console.log(y)
// console.log(f)
// console.log(z)
// console.log(b)
// console.log(a)


// Create an array of your favorite fruits and print the first and last item from the array.
let fruits=["apple","banana","pineapple","watermelon"]
// console.log(fruits[0],fruits[fruits.length-1])
// console.log(fruits.length)


// Create an object to store information about a car (make, model, year). Print each property to the console.
let car= {
    make: "India",
    model: "bs-4",
    year: 2024
}
// console.log(car);
// console.log(car.make)


// DATA CONVERSIONS
// Convert a number to a string and print the result.
// let x=7;
// let y=String(x)
// console.log(String(x))
// console.log(typeof(x))
// console.log(typeof(y))


// Convert a string to a number and print the result.
// let str="123";
// let n=Number(str);
// console.log(n)
// console.log(typeof n)

// Convert a boolean to a string and print the result.
// let bol=true;
// let s=String(bol);
// console.log(s)
// console.log(typeof s)

// Convert a string to a boolean and print the result.
// let str="False";
// let bool=Boolean(str);
// console.log(typeof bool)


// OPERATORS
// Write a program that takes two numbers and prints their sum, difference, product, and quotient.
function math_opearations(n1,n2){
    console.log("addition: ",n1+n2)
    console.log("diff: ",n1-n2)
    console.log("product: ",n1*n2)
    if (n2!=0){
        console.log("quitient: ",n1/n2)
    }else{
        console.log("cannot divide by zero")
    }
    
}
// math_opearations(9,0)

// Write a program that checks if a number is even or odd and prints the result.
function check_evenorodd(num){
    if(num%2==0){
        console.log("even number");
    }else{
        console.log("odd number");
    }
}
// check_evenorodd(7)
// check_evenorodd(8)


// Write a program that takes a number and increments it by 1, then prints the result.
function incre(num){
    num++;
    console.log(num);
}
// incre(6)

// Write a program that takes two variables and swaps their values.
function swap(x,y){
    let temp =x;
    x=y;
    y=temp;
    console.log(x,y)
}
swap(10,12)

/* 
Conditionals
Write a program that checks if a number is positive, negative, or zero and prints the result.

Write a program that takes a day of the week (e.g., "Monday") and prints whether it is a weekday or weekend.

Write a program that takes an age and prints whether the person is a child, teenager, adult, or senior.

Write a program that takes three numbers and prints the largest one.

Loops
Write a program that prints numbers from 1 to 10 using a for loop.

Write a program that prints numbers from 1 to 10 using a while loop.

Write a program that prints the elements of an array using a for loop.

Write a program that calculates the sum of all numbers from 1 to 100 using a for loop.

Write a program that takes an array of numbers and prints only the even numbers using a loop.

Bonus Challenges
Write a program that reverses a string.

Write a program that finds the factorial of a number.

Write a program that finds the largest number in an array.

Write a program that prints the Fibonacci sequence up to a certain number.

Feel free to ask for help or hints if you get stuck on any of these problems!

*/
