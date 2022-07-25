function umnojenie(input){
    let num = Number(input[0]);  
    let sum = 0; 
    for(let i = 1; i <= 10; i++){
        sum = i * num; 
        //console.log(sum); 
        console.log(`${i} * ${num} = ${sum}`);
    } 
    //console.log(`${i} * ${num} = ${sum}`);
} 
umnojenie(["8"]); // функция извежда таблицата за умножение с дадено число от 1 - 10 
// 100/100 si, ezz