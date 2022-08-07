function baker (input){
    let countOfCakes = Number(input[0]); 
    const sugarWeight = 950; const flourWeight = 750; 
    let totalSugar = 0; let totalFlour = 0; 
    let maxSugar = 0; let maxFlour = 0;
    for(let x = 1; x <= (countOfCakes*2); x++){
        let sugar = Number(input[x]); 
        x++; 
        let flour = Number(input[x]); 
        totalSugar += sugar; 
        totalFlour += flour;  

        if (sugar > maxSugar){
            maxSugar = sugar;
        } 
        if (flour > maxFlour){
            maxFlour = flour;
        }
    } 
    let neededSugarBags = Math.ceil(totalSugar / sugarWeight); 
    let neededFlourBags = Math.ceil(totalFlour / flourWeight); 
    console.log(`Sugar: ${neededSugarBags}`); 
    console.log(`Flour: ${neededFlourBags}`); 
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
} // 100 / 100
baker(["3" , "400", "350", "250", "300", "450", "380"]);