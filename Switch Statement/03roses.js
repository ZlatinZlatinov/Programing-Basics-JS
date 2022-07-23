function cvetarnik(input){
    let flowerType = input[0]; 
    let flowerCount = Number(input[1]); 
    let budget = Number(input[2]); 
    const rosePrice = 5 * flowerCount; 
    const dahliasPrice = 3.80 * flowerCount; 
    const tulipsPrice = 2.80 * flowerCount; 
    const narcissusPrice = 3 * flowerCount; 
    const gladiolusPrice = 2.50 * flowerCount;  
    let totalCost = 0
    switch(flowerType){
        case 'Roses' : 
        if (flowerCount > 80){
            totalCost = rosePrice * 0.9 // 10% otstupka
        } else {
            totalCost = rosePrice;
        } 
        break; 
        case 'Dahlias' : 
        if (flowerCount > 90){
            totalCost = dahliasPrice * 0.85 // 15% otstupka
        } else {
            totalCost = dahliasPrice;
        } 
        break; 
        case 'Tulips' : 
        if (flowerCount > 80){
            totalCost = tulipsPrice * 0.85 // 15% otstupka
        } else {
            totalCost = tulipsPrice;
        } 
        break; 
        case 'Narcissus' : 
        if (flowerCount < 120){
            totalCost = narcissusPrice * 1.15 // 15% oskupqvane
        } else {
            totalCost = narcissusPrice;
        } 
        break; 
        case 'Gladiolus' : 
        if (flowerCount < 80){
            totalCost = gladiolusPrice * 1.20 // 20% oskupqvane
        } else {
            totalCost = gladiolusPrice;
        } 
        break; 
    }  
    if (totalCost <= budget){
        let resto = (budget - totalCost).toFixed(2); 
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${resto} leva left.`);
    } else if(totalCost > budget){
        let nedostig = (totalCost - budget).toFixed(2); 
        console.log(`Not enough money, you need ${nedostig} leva more.`);
    }
} 
cvetarnik(["Tulips","88","260"]); 
// 100/100 2nd try amaa qko raburkani neshtata xdd

