function sverqvane(input){
    let gender = input[1]; 
    let age = Number(input[0]); 
    if (gender === 'f'){
        if (age < 16){
            console.log("Miss"); 

        } else{
            console.log("Ms.");
        }
    } 
    if (gender === 'm'){
        if(age < 16){
            console.log("Master"); 

        } else{
            console.log("Mr.")
        }
    }
} 
sverqvane(["11" , "m"]); 
// 100/100 mn qsno 