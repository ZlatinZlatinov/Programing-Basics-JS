function troll (input){ 
    let countOfBadGrades = input[0]; 
    let index = 1; 
    let command = input[index]; 
    let numberOfProblems = 0; let sumOfGrades = 0; let numOfBadGrades = 0; 
    let lastProblem = '' ; 
    while (command !== "Enough"){
        //if (command === "Enough"){
            lastProblem = command = input[index];
        //}  
        numberOfProblems ++; 
        index++; 
        let currentDegree = Number(input[index]); 
        sumOfGrades += currentDegree; 
        if ( currentDegree <= 4){
           numOfBadGrades++; 
        } 
        if (numOfBadGrades >= countOfBadGrades){
            console.log(`You need a break, ${numOfBadGrades} poor grades.`); 
            break;
        } 
        index++; 
        command = input[index]; 
    } 
    if (command === "Enough"){
        let avg = sumOfGrades / numberOfProblems; 
        console.log(`Average score: ${avg.toFixed(2)}`); 
        console.log(`Number of problems: ${numberOfProblems}`); 
        console.log(`Last problem: ${lastProblem}`);
    }
} // 100/100
//troll(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]); 
troll(["2","Income","3","Game Info","6","Best Player","4"]);
