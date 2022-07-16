function basketballEquipment (input){
    const yearTax = Number(input[0]); 
    const priceOfTrainers = yearTax - 0.4 * yearTax; 
    const priceOfSuit = priceOfTrainers - 0.2 * priceOfTrainers; 
    const priceOfBall = priceOfSuit / 4; 
    const priceForAcc = priceOfBall / 5;
    const totalPrice = priceOfTrainers + priceOfSuit + priceOfBall + priceForAcc + yearTax; 
    console.log(totalPrice);
} 
basketballEquipment (["365"]); 
// rabotiwaaa 100/100101010 wowow