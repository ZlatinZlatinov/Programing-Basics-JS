function christianoArogantaldo (input){
    let index = 0; 
    let command = input[index];
    let max = 0; let bestPlayer = 0; 
    while ( command !== "END"){
        let playerName = input[index]; 
        index++; 
        let scoredGoals = Number(input[index]); 
        index++; 
        if(max < scoredGoals){
            max = scoredGoals; 
            bestPlayer = playerName; 
        } else if ( max >= 10){ 
            break;
        }   
        command = input[index];   
    } 
    if (max >= 3){
        console.log(`${bestPlayer} is the best player!`); 
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else if ( max < 3){
        console.log(`${bestPlayer} is the best player!`); 
        console.log(`He has scored ${max} goals.`);
    }
} // 100 / 100 
//christianoArogantaldo (["Neymar" , "2" , "Ronaldo" , "1" , "Messi" , "3" , "END"]); 
//christianoArogantaldo (["Silva" , "5" , "Harry Kane" , "10"]); 
christianoArogantaldo (["Rooney" , "1" , "Junior" , "2" , "Paolino" , "2" , "END"]);
//christianoArogantaldo (["" , "" , "" , "" , "" , "" , ""]);