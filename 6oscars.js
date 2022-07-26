function oscari(input){
    let index = 0; 
    let actorName = input[index]; 
    index++; 
    let points = Number(input[index]);  
    index++;
    let judgesCount = Number(input[index]); 
    index++; 
    let isNominated = false;
     
    for(let i = 0; i< judgesCount; i++){
        let name = input[index]; 
        index++; 
        let tempPoints = Number(input[index]); 
        index++; 
        points += name.length * tempPoints / 2; 
        if (points > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`); 
            isNominated = true; 
            break;
        } 
        
    } 
    if(!isNominated){
        let difference = Math.abs(points - 1250.5); 
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
} // 100/100 ezz
oscari (["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]); 
oscari (["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);

