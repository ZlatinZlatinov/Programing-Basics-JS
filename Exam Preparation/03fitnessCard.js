function fitness (input){
    let avaiableMoney = Number(input[0]); 
    let pol = input[1]; 
    let age = Number(input[2]); 
    let sport = input[3]; 
    let price = 0; 
    switch(sport){
        case "Gym" : 
        if (pol === "m"){
            price += 42;
        } 
        if(pol === "f"){
            price += 35;
        }
        break; 
        case "Boxing" : 
        if (pol === "m"){
            price += 41;
        } 
        if(pol === "f"){
            price += 37;
        } 
        break; 
        case "Yoga" : 
        if (pol === "m"){
            price += 45;
        } 
        if(pol === "f"){
            price += 42;
        }  
        break; 
        case "Zumba" :  
        if (pol === "m"){
            price += 34;
        } 
        if(pol === "f"){
            price += 31;
        } 
        break; 
        case "Dances" : 
        if (pol === "m"){
            price += 51;
        } 
        if(pol === "f"){
            price += 53;
        } 
        break; 
        case "Pilates" : 
        if (pol === "m"){
            price += 39;
        } 
        if(pol === "f"){
            price += 37;
        }  
        break; 
        default : 
        break;
    } 
    if (age <= 19){
        price *= 0.80;
    } 
    if(price <= avaiableMoney){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else{
        let diff = price - avaiableMoney; 
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
} // 100 / 100
fitness(["50" , "m" , "23" , "Gym"]);