function trainerDve (input){
    let countOfJujeta = Number(input[0]); 
    let index = 1; 
    let command = input[index];  
    let sum = 0; let counter = 0;
    while(command !== "Finish"){
        let presentationName = input[index]; 
        index++; counter++;
        let score = 0; 
        for (let x = 1; x <= countOfJujeta; x++){
            let tempScore = Number(input[index]); 
            index++; 
            score +=tempScore;
        } 
        let avg = score / countOfJujeta;
        sum += avg; 
        console.log(`${presentationName} - ${avg.toFixed(2)}.`); 
        command = input[index];
    }  
    sum /= counter;
    console.log(`Student's final assessment is ${sum.toFixed(2)}.`);
} // 110 / 100 3rd try xdd
trainerDve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]
);