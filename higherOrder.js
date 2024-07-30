// ForEach method


//  Simple iteration with single parameter
// const numbers=[1,2,3,4,5,6,7,8,9];

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

// const students = [
//     {name:'Rakesh', score:70},
//     {name:'Ramudu', score:90},
//     {name:'Keerthana', score:95},
//     {name:'keerthi', score:60}
// ]

// students.forEach(student=>{
//     student.passed=student.score>=70;
// })

// students.forEach(student=>{
//     console.log(student.passed);
// })



// Filter Method
// const numbers=[1,2,3,4,5,6,7,8,9];
// let evens=numbers.filter(num=> num%2===0);
// console.log(evens);

// const words=["eraki", "raki", "RAKESH", "keerthi"];
// const longWords=words.filter(word=> word.length>4);
// console.log(longWords);

const employees = [
    { name: "Alice", department: "Engineering", yearsOfExperience: 5 },
    { name: "Bob", department: "Marketing", yearsOfExperience: 2 },
    { name: "Charlie", department: "Engineering", yearsOfExperience: 7 },
    { name: "David", department: "HR", yearsOfExperience: 3 },
];
const emp = employees.filter(emply=> emply.department=="Engineering" && emply.yearsOfExperience> 4);
emp.forEach(em=>{
    console.log(em.name);
})
// console.log(emp);