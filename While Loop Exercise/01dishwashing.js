function sudomiqlna(input) { 
    let broiVero = Number(input[0]); 
    let kolichestvoVero = broiVero * 750; 
    let sumaVero = 0;
    let index = 1; 
    let sudove = input[index]; 
    let veroChinii = 0; let veroTenjeri = 0;  let verodveChinii = 0; 
    let sumaChinii = 0; let bonusChinii = 0; let sumaTenjeri = 0;
     
    while(sudove !== "End" && sudove !== undefined){
        sumaChinii = Number(input[index]); 
        index++;  
        bonusChinii = Number(input[index]); 
        index++; 
        sumaTenjeri = Number(input[index]); 
        index++; 

        veroChinii = sumaChinii * 5; 
        verodveChinii = bonusChinii * 5;   
        veroTenjeri = sumaTenjeri * 15;  

        sumaVero += (veroChinii + veroTenjeri + verodveChinii);  
        if (sumaVero > kolichestvoVero || sumaVero <= 0){ 
            
            break;
        }
        
        sudove = input[index]; 
        
    } 
    let totalChinii = sumaChinii + bonusChinii; 
    let diff = kolichestvoVero - sumaVero;
    if(diff >= 0){
        console.log("Detergent was enough!"); 
        console.log(`${totalChinii} dishes and ${sumaTenjeri} pots were washed.`); 
        console.log(`Leftover detergent ${diff} ml.`);
    } else{
        console.log(`Not enough detergent, ${Math.abs(diff)} ml. more necessary!`);
    }
} 
sudomiqlna(["2" , "53" , "65" , "55"]); 
sudomiqlna(["1" , "10" , "15" , "10" , "12" , "13" , "30"]); 

