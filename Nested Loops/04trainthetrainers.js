function trener (input){
    let countOfJudjes = Number(input[0]); 
    let index = 1; 
    let command = input[index]; 
    let counter = 0; let sum = 0;
    while(command !== "Finish"){
        let presentationName = input[index]; 
        index++;  
        counter++;
        let ocenkaA = Number(input[index]); 
        index++; 
        let ocenkaB = Number(input[index]); 
        index++ 
        let average = (ocenkaA + ocenkaB) / countOfJudjes; 
        sum += average; 
        
        console.log(`${presentationName} - ${average.toFixed(2)}.`); 
        
        command = input[index]; 
        
    }  
    console.log(`Student's final assessment is ${(sum / counter).toFixed(2)}.`);// tva 6e raboti ama ako jureto sa samo 2ma xdx
} // 30 / 100 pri 2 jureta samo xdd
trener (["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
