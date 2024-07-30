// ForEach method


//  Simple iteration with single parameter
const numbers=[1,2,3,4,5,6,7,8,9];

// numbers.forEach(number =>{
//     console.log(number);
// })

// let sum=0;
// numbers.forEach(number =>{
//     sum+=number;
// })
// console.log(sum);

// numbers.forEach((num, ind,arra,array)=>{
//     console.log(`the element at index ${ind} is ${num}`);
//     console.log(arra);
//     console.log(array);
// })

let evenCount=0;
let oddCount=0;

numbers.forEach(number=>{
    if(number % 2==0){
        evenCount++;
    }else{
        oddCount++;
    }
})
console.log(`even number count${evenCount} and odd count ${oddCount}`);