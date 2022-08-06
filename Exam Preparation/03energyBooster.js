function redBull (input){
    let fruit = input[0]; 
    let size = input[1]; 
    let count = Number(input[2]); 
    let smallPrice = 0; 
    let bigPrice = 0;
    switch(fruit){
        case "Watermelon" : 
        if(size === "small"){
            smallPrice += (2 * 56);
        } 
        if(size === "big"){
            bigPrice += (5 * 28.70);
        }
        break; 
        case "Mango" :  
        if(size === "small"){
            smallPrice += (2 * 36.66);
        } 
        if(size === "big"){
            bigPrice += (5 * 19.60);
        }
        break; 
        case "Pineapple" :  
        if(size === "small"){
            smallPrice += (2 * 42.10);
        } 
        if(size === "big"){
            bigPrice += (5 * 24.80);
        }
        break; 
        case "Raspberry" : 
        if(size === "small"){
            smallPrice += (2 * 20);
        } 
        if(size === "big"){
            bigPrice += (5 * 15.20);
        }
        break; 
        default : 
        break;
    } 
    let totalSum = (smallPrice + bigPrice)*count; 
    if (totalSum >= 400 && totalSum <= 1000){
        totalSum *= 0.85;
    } else if (totalSum > 1000){
        totalSum *= 0.5;
    } 
    console.log(`${totalSum.toFixed(2)} lv.`);
} // 100 / 100
redBull(["Watermelon" , "big" , "4"])