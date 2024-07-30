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

// let evenCount=0;
// let oddCount=0;
// numbers.forEach(number=>{
//     if(number % 2==0){
//         evenCount++;
//     }else{
//         oddCount++;
//     }
// })
// console.log(`even number count${evenCount} and odd count ${oddCount}`);

// numbers.forEach((num, ind, array)=>{
//     console.log(`${num} at positin ${ind}   Array: ${[array.join(" @ ")]}`);
// })

const students = [
    {name:'Rakesh', score:70},
    {name:'Ramudu', score:90},
    {name:'Keerthana', score:95},
    {name:'keerthi', score:60}
]

students.forEach(student=>{
    student.passed=student.score>=70;
})

students.forEach(student=>{
    console.log(student.passed);
})