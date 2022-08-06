function coffeee (input){
    let drinkType = input[0]; 
    let sugar = input[1]; 
    let count = Number(input[2]); 
    let price = 0; 
    switch (drinkType){
        case "Espresso" : 
        if (sugar === "Without"){
            price = 0.9;
        } else if (sugar === "Normal"){
            price = 1;
        } else if (sugar === "Extra"){
            price = 1.20;
        }
        break; 
        case "Cappuccino" : 
        if (sugar === "Without"){
            price = 1;
        } else if (sugar === "Normal"){
            price = 1.2;
        } else if (sugar === "Extra"){
            price = 1.60;
        } 
        break; 
        case "Tea" : 
        if (sugar === "Without"){
            price = 0.5;
        } else if (sugar === "Normal"){
            price = 0.6;
        } else if (sugar === "Extra"){
            price = 0.7;
        } 
        break;
    } 
    let totalSum = price * count; 
    if ( sugar === "Without"){
        totalSum *= 0.65;
    } 
    if (drinkType === "Espresso" && count >=5){
        totalSum *= 0.75; 
    } 
    if (totalSum > 15){
        totalSum *= 0.8;
    } 
    console.log(`You bought ${count} cups of ${drinkType} for ${totalSum.toFixed(2)} lv.`);

} // 100 /100
coffeee(["Espresso" , "Without" , "10"]);