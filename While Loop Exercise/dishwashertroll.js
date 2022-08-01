function troller(input){
    let bottlesCount = Number(input[0]); 
    let oneBottleSize = 750; 
    let multipleBottles = oneBottleSize * bottlesCount; 
    let deterjentPerDish = 5; 
    let deterjentPerPot = 15; 
    let washedPlates = 0; 
    let washedPots = 0; 
    let index = 1; let command = input[index]; 

    while(command !== "End"){
        let washingAmount = Number(command); 

        if(index % 3 === 0){
            washedPlates += washingAmount; 
            washingAmount *= deterjentPerPot; 
            multipleBottles -= washingAmount
        } else{ 
            washedPots += washingAmount; 
            washingAmount *= deterjentPerDish; 
            multipleBottles -= washingAmount;
        } 
        if ( multipleBottles < 0){
            console.log(`Not enough detergent, ${Math.abs(multipleBottles)} ml. more necessary!`);
            break;
        }  
        index++; 
        command = input[index]; 
    } 
    if (multipleBottles >= 0){
        console.log("Detergent was enough!");  
        console.log(`${washedPlates} dishes and ${washedPots} pots were washed.`); 
        console.log(`Leftover detergent ${multipleBottles} ml.`);
    }
} 
troller(["2" , "53" , "65" , "55", "End"]); // mi ne 60/100 xdd
troller(["1" , "10" , "15" , "10" , "12" , "13" , "30"]);