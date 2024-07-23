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
console.log(combineObjects(a,b));
