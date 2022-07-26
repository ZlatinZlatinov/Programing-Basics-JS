function ma4kaiGrisho (input){
    let index = 0; 
    let tournamentCount = Number(input[index]); 
    index++; 
    let startPoints = Number(input[index]); 
    index++; 
    //let etapScore = input[index]; 
    let tempPoints = 0; let winCounter = 0; 
    for (let i = 0; i < tournamentCount; i++){
        let score = input[index]; 
        index++; 
        switch(score){
            case "W" : tempPoints += 2000; 
            winCounter ++; 
            break; 
            case "F" : tempPoints += 1200; 
            break; 
            case "SF" : tempPoints += 720; 
            break; 
        }
    } 
    let logA = tempPoints + startPoints; 
    let logB = tempPoints / tournamentCount; 
    let logC = winCounter / tournamentCount * 100; 
    console.log(`Final points: ${logA}`); 
    console.log(`Average points: ${Math.floor(logB)}`); 
    console.log(`${logC.toFixed(2)}%`);
} 
ma4kaiGrisho (["5","1400","F","SF","W","W","SF"]); // 100/100 sii, ezz  
ma4kaiGrisho (["4","750","SF","W","SF","W"]); // mnoo gi razbiram ee

