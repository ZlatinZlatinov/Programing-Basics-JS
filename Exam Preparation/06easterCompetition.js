function competition (input){
    let countOfCakes = Number(input[0]); 
    let index = 1; let max = 0; let chefName = '';
    for(let x = 1; x <= countOfCakes; x++){ 
        let name = input[index]; 
        index++; 
        let command = input[index];
        let sumScores = 0; 
        while (command !== "Stop") {
             
            let score = Number(input[index]); 
            index++; 
            sumScores += score; 

            command = input[index];
        } 
        console.log(`${name} has ${sumScores} points.`);
         
        if (sumScores > max){
            max = sumScores; 
            chefName = name; 
            console.log(`${name} is the new number 1!`);
        } 

        index++;
    } 
    console.log(`${chefName} won competition with ${max} points!`);
} // 100 /100 
competition(["3" , "Chef Manchev" , "10", "10" , "10", "10" , "Stop", 
"Natalie" , "8", "2" , "9", "Stop" , "George", "9" , "2", "4" , "2" , "Stop"]);