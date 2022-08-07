function eggsBattle (input){
    let countEggsPlayerOne = Number(input[0]); 
    let countEggsPlayerTwo = Number(input[1]); 
    let index = 2; let command = input[index]; 
    while(command !== "End of battle"){
        let score = input[index]; 
        index++; 
        switch (score){
            case "one" : 
            countEggsPlayerTwo--;
            break; 
            case "two" : 
            countEggsPlayerOne--; 
            break;
        } 
        if(countEggsPlayerOne <= 0){
            console.log(`Player one is out of eggs. Player two has ${countEggsPlayerTwo} eggs left.`); 
            break;
        } 
        if(countEggsPlayerTwo <= 0){
            console.log(`Player two is out of eggs. Player one has ${countEggsPlayerOne} eggs left.`); 
            break;
        }
        command = input[index];
    } 
    if (command === "End of battle"){
        console.log(`Player one has ${countEggsPlayerOne} eggs left.`); 
        console.log(`Player two has ${countEggsPlayerTwo} eggs left.`);
    }
}  // 100 / 100 
eggsBattle(["5" , "4" , "one" , "two" , "one" , "two" , "two" , "End of battle"]);