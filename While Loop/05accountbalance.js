function accountant (input){
    let index = 1; 
    let money = input[0]; 
    //index++; 
    let n = 0; let totalBalance = 0; 
    while ( money !== "NoMoreMoney"){  
        let cash = Number(money); 
        if ( cash < 0){
            console.log("Invalid operation!"); 
            break;
        } 
        totalBalance += cash;
        console.log(`Increase: ${money}`); 
        money = input[index]; 
        index++; 
        
    } 
    console.log(`Total: ${totalBalance}`); 
} 
accountant(["5.51",  // 100/110101
"69.42",
"100",
"NoMoreMoney"])
