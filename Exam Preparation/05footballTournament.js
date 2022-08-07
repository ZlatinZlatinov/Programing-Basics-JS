function soccer(input) {
    let teamName = input[0]; 
    let gameCount = Number(input[1]); 
    let points = 0; let winCounter = 0; 
    let drawCounter = 0; let loseCounter = 0; 
    if (gameCount === 0){
        console.log(`${teamName} hasn't played any games during this season.`);
    } else{
        for (let x = 2; x <= (gameCount + 2); x++){
            let score = input[x]; 
            switch (score) {
            case "W":
                winCounter++; 
                points += 3;
                break; 
            case "D" : 
                drawCounter++; 
                points += 1;
                break; 
            case "L" : 
                loseCounter++;
            default:
                break;
            }
        }  
     
    console.log(`${teamName} has won ${points} points during this season.`); 
    console.log("Total stats:"); 
    console.log(`## W: ${winCounter}`); 
    console.log(`## D: ${drawCounter}`); 
    console.log(`## L: ${loseCounter}`); 
    let winRate = winCounter * 100 / gameCount;
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
} // 100 / 100
soccer(["Liverpool" , "10" , "W" , "D" , "D" , "W" , "L" , "W" , "D", "D" , "W" , "W" ]);