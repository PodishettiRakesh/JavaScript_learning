let table =(n) =>{
    let output='';
    for(let i=1;i<=n;i++){
        for(let j=1;j<=10;j++){
            let ans=i*j;
            output += (`${i} x ${j} = ${ans}`)+'<br>';
        }
        output+='<br>';
    }
    document.getElementById('multiply').innerHTML = output;
}

// table(5);

let factorial = (n) =>{
    if(n<=1){
        return 1;
    }else{
        return n*factorial(n-1);
    }

}
// console.log(factorial(3));



let combineObjects= (a,b) =>{
    return Object.assign(a,b);
}
a={
    a:"rakesh",
    b:"raki"
}

b={
    b:"keerthi",
    d:"ramudu"
}
// console.log(combineObjects(a,b));


// Function Closures:

// Write a function createCounter that returns a function that, when called, increments and returns a counter variable.
function createCounter(){
    let counter=0;
    return function(){
        counter+=1;
        return counter;
    }
}

let constant1=createCounter();
console.log(constant1());
console.log(constant1());
console.log(constant1());


// Array Transformation:

// Write a function mapToLengths that takes an array of strings and returns a new array containing the lengths of those strings.
// Object Comparison:

// Write a function areObjectsEqual that takes two objects and returns true if they have the same properties and values, otherwise false.
// Array Sorting:

// Write a function sortNumbers that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// Handling Undefined Values:

// Write a function safeAccess that takes an object and a property name and returns the property value if it exists, otherwise returns a default value.
// String Manipulation:

// Write a function reverseString that takes a string and returns the string reversed.
// Looping with Objects:

// Write a function countProperties that takes an object and returns the number of properties it has.
// Array Filtering:

// Write a function filterStrings that takes an array of strings and a length, and returns a new array containing only the strings that are longer than the given length.
// Conditional Logic:

// Write a function isPrime that takes a number and returns true if the number is a prime number, otherwise false.
// Destructuring:

// Write a function swap that takes an array of two elements and returns a new array with the elements swapped.
// String Templates:

// Write a function formatName that takes an object with firstName and lastName properties and returns a formatted string "Last, First".





