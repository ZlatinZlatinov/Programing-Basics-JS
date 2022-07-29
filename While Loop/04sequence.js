function nosequence(input){
    let index = 0; 
    let num = Number(input[index]); 
    index++; 
    let action = 1; 
    while(action <= num){ 
        console.log(action);
        action = action * 2 + 1; 
        index++ 
    } 
} 
nosequence(["8"]); // 100/100