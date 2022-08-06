function planinari(input){
    let index = 0; 
    let groupCount = Number(input[index]); 
    index++; 
    let group1Musala = 0; let group3Kilimanjaro = 0; let sum = 0;
    let group2Monblan = 0; let group4K2 = 0; let group5Everest = 0; 
    for (let i = 1; i <= groupCount; i++){ 
        sum += Number(input[i]);
        let peopleCount = Number(input[index]);  
        index++;
        if (peopleCount > 0 && peopleCount <= 5){
            group1Musala += peopleCount;
        } else if(peopleCount >= 6 && peopleCount <= 12){
            group2Monblan += peopleCount; 
        } else if (peopleCount >= 13 && peopleCount <= 25){
            group3Kilimanjaro += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40){
            group4K2 += peopleCount; 
        } else if (peopleCount >= 41){
            group5Everest += peopleCount;
        } 
        
    } 
    let group1Percentage = group1Musala / sum * 100; 
    let group2Percentage = group2Monblan / sum * 100; 
    let group3Percentage = group3Kilimanjaro / sum * 100; 
    let group4Percentage = group4K2 / sum * 100; 
    let group5Percentage = group5Everest / sum * 100; 
    console.log(`${group1Percentage.toFixed(2)}%`); 
    console.log(`${group2Percentage.toFixed(2)}%`); 
    console.log(`${group3Percentage.toFixed(2)}%`); 
    console.log(`${group4Percentage.toFixed(2)}%`); 
    console.log(`${group5Percentage.toFixed(2)}%`); 
   
}  //100/100
planinari (["10","10","5","1","100","12","26","17","37","40","78"]); // tva ralti 100 na 100 100% 2 puti testvano