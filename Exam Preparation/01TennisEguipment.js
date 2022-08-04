function tennisEguipment(input) {
    let tennisRocketPrice = Number(input[0]); 
    let countOfTenisRockets = Number(input[1]); 
    let finalRocketPrice = tennisRocketPrice * countOfTenisRockets;
    let countTrainers = Number(input[2]); 
    let trainersPrice = tennisRocketPrice / 6;  
    let finalTRainesPrice = trainersPrice * countTrainers;
    let otherEquipmentPrice = (finalRocketPrice + finalTRainesPrice) * 0.20; 
    let totalSum = finalTRainesPrice + finalRocketPrice + otherEquipmentPrice; 
    let priceToBePaidByDj = totalSum / 8; 
    let priceToBePaidBySp = (totalSum * 7) / 8; 
    console.log(`Price to be paid by Djokovic ${Math.floor(priceToBePaidByDj)}`); 
    console.log(`Price to be paid by sponsors ${Math.ceil(priceToBePaidBySp)}`);
} 
tennisEguipment (["850" , "4" , "2"]);