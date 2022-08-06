function topki (input){
    let countOfBalls = Number(input[0]); 
    let index = 1; 
    let counter = 0; 
    let totalPoints = 0; 
    let redCounter = 0; let whiteCounter = 0;
    let orangeCounter = 0; let yellowCounter = 0; 
    let othersCounter = 0; let devides = 0; 
    while (counter < countOfBalls){
        counter++; 
        let color = input[index]; 
        index++; 
        switch(color){
            case "red" : 
            redCounter++; 
            totalPoints += 5; 
            break; 
            case "orange" : 
            orangeCounter++; 
            totalPoints += 10; 
            break; 
            case "yellow" :
            yellowCounter ++; 
            totalPoints += 15; 
            break; 
            case "white" : 
            whiteCounter++; 
            totalPoints += 20;
            break; 
            case "black" :  
            totalPoints = Math.floor(totalPoints / 2); 
            devides++;
            break; 
            default : 
            othersCounter++; 
            break;
        }
    } 
    console.log(`Total points: ${totalPoints}`); 
    console.log(`Red balls: ${redCounter}`); 
    console.log(`Orange balls: ${orangeCounter}`); 
    console.log(`Yellow balls: ${yellowCounter}`); 
    console.log(`White balls: ${whiteCounter}`); 
    console.log(`Other colors picked: ${othersCounter}`); 
    console.log(`Divides from black balls: ${devides}`);
} 
topki(["3" , "white" , "black" , "pink"]); // 100/100 siiiee