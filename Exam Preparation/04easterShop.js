function easterShop (input){
    let starCountEggs = Number(input[0]); 
    let index = 1; 
    let command = input[index]; 
    let sellCounter = 0;
    while (command !== "Close") {
        let action = input[index]; 
        index++; 
        let currentEggCount = Number(input[index]);  
        if (currentEggCount > starCountEggs && action === "Buy"){
            console.log(`Not enough eggs in store!`); 
            console.log(`You can buy only ${starCountEggs}.`); 
            break; 
        }
        switch(action){
            case "Buy" : 
            starCountEggs -= currentEggCount; 
            sellCounter += currentEggCount;
            break; 
            case "Fill" : 
            starCountEggs += currentEggCount; 
            break;
        }  
        index++;
        command = input[index];
    }  
    if(command === "Close"){
        console.log(`Store is closed!`); 
        console.log(`${sellCounter} eggs sold.`);   
    } 
} // 100 / 100 wooo
easterShop(["13" , "Buy" , "8" , "Fill" , "3" , "Buy" , "10"]); 
easterShop(["20" , "Fill" , "30" , "Buy" , "15" , "Buy" , "20" , "Close"]);