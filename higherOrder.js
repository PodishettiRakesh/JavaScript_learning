// ForEach method


//  Simple iteration with single parameter
const numbers=[1,2,3,4,5,6,7,8,9];

// numbers.forEach(number =>{
//     console.log(number);
// })

let sum=0;
numbers.forEach(number =>{
    sum+=number;
})
console.log(sum);