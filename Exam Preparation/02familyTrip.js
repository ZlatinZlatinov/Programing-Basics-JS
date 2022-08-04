function familyTrip (input){
    let budget = Number(input[0]); 
    let countofNights = Number(input[1]); 
    let pricePerNight = Number(input[2]); 
    let percentageBonusTaxes = Number(input[3]); 
    if (countofNights > 7){
        pricePerNight *= 0.95;
    } 
    let nightsCost = countofNights * pricePerNight; 
    let bonusTaxes = (percentageBonusTaxes / 100) * budget; 
    const totalSum =  bonusTaxes + nightsCost; 
    if ( totalSum <= budget){
        let diff = budget - totalSum; 
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else if ( totalSum > budget){
        let diff = totalSum - budget; 
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
} // 100 / 100
familyTrip(["800.50" , "8" , "100" , "2"]);