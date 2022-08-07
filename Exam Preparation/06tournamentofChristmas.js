function tournament (input){
    let days = Number(input[0]); 
    let index = 1; 
    let totalMoney = 0; 
    let winOftheDay = 0; let loseOfTheDay = 0; 
    for(let x = 1; x <= days; x++){
        let command = input[index]; 
        let dayilyWonMoney = 0; 
        let winCounter = 0; 
        let loseCounter = 0; 
        while( command !== "Finish"){
            let sportName = input[index]; 
            index++; 
            let endResult = input[index]; 
            index++; 
            switch(endResult){
                case "win" : 
                winCounter ++; 
                dayilyWonMoney += 20; 
                break; 
                case "lose" : 
                loseCounter ++; 
                break;
            }  
            command = input[index];
        }  
            if(winCounter > loseCounter){
                winOftheDay++; 
                dayilyWonMoney *= 1.1;
            } else{
                loseOfTheDay++;
            } 
            totalMoney += dayilyWonMoney
            index++;           
    } 
    if(winOftheDay > loseOfTheDay){ 
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
} // 100 / 100 
tournament (["2" , "volleyball" , "win" , "football" , "lose" , "basketball" , "win" ,
 "Finish" , "golf" , "win" , "tennis" , "win" , "badminton" , "win" , "Finish"]);