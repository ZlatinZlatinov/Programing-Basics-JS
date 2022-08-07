function eggPlant (input){
    let countOfEggs = Number(input[0]); 
    let index = 1; let eggColor = ''; 
    let redCounter = 0; let orangeCounter = 0; let blueCounter = 0; 
    let greenCounter = 0; let max = 0; 
    for (let x = 1; x <= countOfEggs; x++){ 
        let command = input[x]; 
        switch(command){ 
            case "red" : 
            redCounter++; break; 
            case "orange" : 
            orangeCounter++; break; 
            case "blue" : 
            blueCounter++; break; 
            case "green" : 
            greenCounter++; break;
        } 
        if(redCounter > max){
            max = redCounter; 
            eggColor = "red";
        } else if (orangeCounter > max){
            max = orangeCounter; 
            eggColor = "orange";
        } else if (blueCounter > max){
            max = blueCounter; 
            eggColor = "blue";
        } else if (greenCounter > max){
            max = greenCounter; 
            eggColor = "green";
        }
    } 
    console.log(`Red eggs: ${redCounter}`); 
    console.log(`Orange eggs: ${orangeCounter}`); 
    console.log(`Blue eggs: ${blueCounter}`); 
    console.log(`Green eggs: ${greenCounter}`); 
    console.log(`Max eggs: ${max} -> ${eggColor}`);
} // 100 / 100 ezz
eggPlant (["7" , "orange" , "blue" , "green" , "green" , "blue" , "red" , "green"]);