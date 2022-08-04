function basketballEquipment(input) {
    let yearTax = Number(input[0]); 
    let kecovePrice = yearTax * 0.60; 
    let ekipPrice = kecovePrice * 0.80; 
    let ballPrice = ekipPrice / 4; 
    let accessoaries = ballPrice / 5; 
    let totalSum = yearTax + kecovePrice + ekipPrice + ballPrice + accessoaries; 
    console.log(`${totalSum.toFixed(2)}`);
} 
basketballEquipment (["320"])