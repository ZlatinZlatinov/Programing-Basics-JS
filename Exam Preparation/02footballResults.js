function footballResults (input){
    let result1 = input[0]; 
    let result2 = input[1]; 
    let result3 = input[2]; 
    let winCounter = 0; let loseCounter = 0; let drawCounter = 0;
    let numA = Number(result1.charAt(0)); 
    let numB = Number(result1.charAt(2)); 
    if ( numA > numB){ 
        winCounter++;
        //console.log(``);
    } else if (numA === numB){
        drawCounter++;
    } else if (numA < numB){
        loseCounter++;
    } 
    let numC = Number(result2.charAt(0)); 
    let numD = Number(result2.charAt(2));
    if ( numC > numD){ 
        winCounter++;
       // console.log(``);
    } else if (numC === numD){
        drawCounter++;
    } else if (numC < numD){
        loseCounter++;
    } 
    let numE = Number(result3.charAt(0)); 
    let numF = Number(result3.charAt(2));
    if (numE > numF){ 
        winCounter++;
       // console.log(``);
    } else if (numE== numF){
        drawCounter++;
    } else if (numE < numF){
        loseCounter++;
    } 
    console.log(`Team won ${winCounter} games.`); 
    console.log(`Team lost ${loseCounter} games.`); 
    console.log(`Drawn games: ${drawCounter}`);
} 
//footballResults(["3:1" , "0:2" , "0:0"]) 
footballResults(["4:2" , "0:3" , "1:0"])