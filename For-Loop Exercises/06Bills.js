function billsAmaNeGates(input){
    let index = 0; 
    let months = Number(input[index]); 
    index++; 
    let waterPrice = 20; let internetPrice = 15; let othersPrice = 0; 
    let totalPriceElectricity = 0; let averagePrice = 0;
    for (i = 1; i <= months; i++){
        totalPriceElectricity += Number(input[i]); 
        let monthElPrice = Number(input[index]); 
        index++;
        othersPrice += (monthElPrice + waterPrice + internetPrice)*1.2; 
        
    } 
    waterPrice *= months; internetPrice *= months; 
    averagePrice = (waterPrice + internetPrice + othersPrice + totalPriceElectricity)/months; 
    console.log(`Electricity: ${totalPriceElectricity.toFixed(2)} lv`); 
    console.log(`Water: ${waterPrice.toFixed(2)} lv`); 
    console.log(`Internet: ${internetPrice.toFixed(2)} lv`); 
    console.log(`Other: ${othersPrice.toFixed(2)} lv`); 
    console.log(`Average: ${averagePrice.toFixed(2)} lv`);

    
} 
/* 5 68.63 89.25 132.53 93.53 63.22 */ 
billsAmaNeGates(["5" , "68.63" , "89.25" , "132.53" , "93.53" , "63.22"]); // 100/ 100 1st try ezz