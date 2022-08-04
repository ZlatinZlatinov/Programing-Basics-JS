function birthday (input){
    let rent = Number(input[0]); 
    let cake = rent * 0.2; 
    let drinks = cake - cake * 0.45; 
    let animator = rent / 3; 
    let totalCost = rent + cake + drinks + animator; 
    console.log(`${totalCost.toFixed(1)}`);
} 
birthday(["2250"]);