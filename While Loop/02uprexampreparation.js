function exam (input){
    
    let countOfBadGrades = Number(input[0]); 
    let index = 1; 
    let imeZadacha = input[index]; 
    let zadachiCounter = 0; 
    let znak = 2; 
    let ocenka = Number(input[znak]); 
    let average = 0;
    
    
    while(imeZadacha !== "Enough"){ 
        //console.log(imeZadacha); 
        index +=2;
        imeZadacha = input[index];  
        zadachiCounter++ 
    } 
    //console.log(zadachiCounter)
    while(ocenka <= 7){ 
        //console.log(ocenka); 
        average += ocenka;
        znak += 2; 
        ocenka = Number(input[znak]);
    } 
average /= zadachiCounter; 
let last = input[zadachiCounter +3]; 
console.log(`Average score: ${average.toFixed(2)}`); 
console.log(`Number of problems: ${zadachiCounter}`); 
console.log(`Last problem: ${last}`);
} // solution in 02newtroll
exam(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
