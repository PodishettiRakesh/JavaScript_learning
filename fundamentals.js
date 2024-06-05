

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
// swap(10,12)


// CONDITIONALS
// Write a program that checks if a number is positive, negative, or zero and prints the result.
function checkNum(num){
    if (num==0){
        console.log("it is even number");
    }else if(num%2==0){
        console.log(num + "it is even number");
    }else{
        console.log(num+"it is odd number");
    }
}
// checkNum(8)
// checkNum(0)
// checkNum(9)

// Write a program that takes a day of the week (e.g., "Monday") and prints whether it is a weekday or weekend.
function day_week(day){
    weekdays=["monday","tuesdat","wednesday","thursday","friday"]
    weekends=["sunday","saturday"]
    if(day in weekdays){
        console.log(day +" is weekday")
    }else{
        console.log(day+ " is weekend")
    }
}
// day_week("sunday")
// day_week("monday")

// Write a program that takes an age and prints whether the person is a child, teenager, adult, or senior.
function groupPerson(person,age){
    if(age<15){
        console.log(person+" is a child");
    }else if(15<age & age<=21){
        console.log(person+" is a teenager");
    }else if(21<age & age<=30){
        console.log(person+" is a adult");
    }else{
        console.log(person + " is a senior");
    }
}
// groupPerson("rakesh",12)
// groupPerson("ramu",26)
// groupPerson("ramudu",35)

// Write a program that takes three numbers and prints the largest one.
function maxOf_Three(x,y,z){
    let max_num=0;
    if(x>max_num){
        max_num=x

    }if(y>max_num){
        max_num=y
    }if(z>max_num){
        max_num=z
    }
    console.log(max_num);
}
// maxOf_Three(12,10,19)



// LOOPS
// Write a program that prints numbers from 1 to 10 using a for loop.
function print_nums(n){
    for(i=1;i<n+1;i++){
        console.log(i)
    }
}
// print_nums(10)

// Write a program that prints numbers from 1 to 10 using a while loop.
function printNumbers(n){
    let i=1;
    while(i < n+1){
        console.log(i)
        i++
    }
}
// printNumbers(10)

// Write a program that prints the elements of an array using a for loop.
function print_Array(arr){
    for(i=0; i<arr.length;i++){
        console.log(arr[i])
    }
}
// arr=["apple","banana","cat","dog"]
// print_Array(arr)

// Write a program that calculates the sum of all numbers from 1 to 100 using a for loop.
function calcualte_sum(n1,n2){
    sum=0;
    for(i=n1;i<=n2;i++){
        sum+=i
        console.log(i)
    }
    console.log(sum)
}
// calcualte_sum(1,100)

// Write a program that takes an array of numbers and prints only the even numbers using a loop.
function print_even(arr){
    for(i=0;i<arr.length;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// print_even([1,2,3,4,5,6,7,8,9])


// BONUS CHALLENGES
// Write a program that reverses a string.
function reverse_str(str){
    let x=str.split('')
    let reversed=x.reverse().join('');
    console.log(reversed)
}
// reverse_str("apple")

// Write a program that finds the factorial of a number.
function factorial_of_number(n){
    facto=1;
    while(n>1){
        facto=facto*n
        n--
    }
    console.log(facto)
}
// factorial_of_number(4)

//Write a program that finds the largest number in an array.
function max_of_array(arr){
    let maxi=Math.max(...arr);
    console.log(maxi)

}
// max_of_array([1,2,3,4])

//Write a program that prints the Fibonacci sequence up to a certain number.
function Fibonacci_series(n){
    let first=0;
    let second=1;
    if(n==0){
        console.log(first);
    }else if(n==1){
        console.log(first,second)
    }else{
        
        console.log(first);
        console.log(second);
        for(i=3;i<=n;i++){
            let next=first+second;
            console.log(next);
            first=second;
            second=next;
            
        }
    }
}
// Fibonacci_series(6)

// const person={"name":"rakesh","age":23};
// person.num=79955;
// console.log(person)
// console.log(person.name)
// console.log(person["name"])