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

table(5);