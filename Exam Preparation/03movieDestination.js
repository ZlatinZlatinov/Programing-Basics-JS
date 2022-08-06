function kino (input){
    let budget = Number(input[0]); 
    let destinationName = input[1]; 
    let season = input[2]; 
    let countOfDays = Number(input[3]); 
    let price = 0;
    switch(destinationName){
        case "Dubai" : 
        if(season === "Winter"){
            price = 45000 
        }  
        if(season === "Summer"){
            price = 40000
        }
        break; 
        case "Sofia" : 
        if(season === "Winter"){
            price = 17000
        }  
        if(season === "Summer"){
            price = 12500
        } 
        break; 
        case "London" : 
        if(season === "Winter"){
            price = 24000
        }  
        if(season === "Summer"){
            price = 20250
        }
        break; 
        default: 
        break;
    } 
    let totalSum = price * countOfDays; 
    if (destinationName === "Dubai"){
        totalSum *= 0.70;
    } else if (destinationName === "Sofia"){
        totalSum *= 1.25;
    } 
    let diff = Math.abs(budget - totalSum);
    if(totalSum <= budget){  
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else if ( totalSum > budget){
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
} // 100 / 100
kino(["400000" , "Sofia" , "Winter" , "20"]);