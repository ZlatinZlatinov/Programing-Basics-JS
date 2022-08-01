function systemReport(input){
    let neededSum = Number(input[0]); 
    let index = 1; 
    let avgCash = 0; let avgCard = 0; 
    let command = input[index]; let totalSum = 0; 
    let counterCash = 0; let counterCards = 0;
    
    while(command !== "End"){
        let cashPayment = Number(input[index]); 
        index++; 
        let cardPayment = Number(input[index]); 
        index++;  
        if(cashPayment > 100){
            console.log("Error in transaction!");
        } else{ 
            counterCash++ ; 
            avgCash += cashPayment;
            console.log("Product sold!"); 
        } 
        if(cardPayment < 10){
            console.log("Error in transaction!");
        } else{ 
            counterCards++ ; 
            avgCard += cardPayment;
            console.log("Product sold!");
        } 
        totalSum = (avgCard + avgCash); 
        if (totalSum >= neededSum){ 
            let averageCash = avgCash / counterCash; 
            let averageCards = avgCard / counterCards; 
            console.log(`Average CS: ${averageCash.toFixed(2)}`); 
            console.log(`Average CC: ${averageCards.toFixed(2)}`);
            break;
        } 
        command = input[index]; 
        if(command === "End" ){ 
            console.log(`Failed to collect required money for charity.`); 
        }
    } 
} 
systemReport (["500" , "120" , "8" , "63" , "256" , "78" , "317"]); 
systemReport (["600" , "86" , "150" , "98" , "227" , "End"]); //100 / 100 Si, ezzz ; SMD Jujde
//systemReport (["" , "" , "" , "" , "" , "" , "" , ""]);