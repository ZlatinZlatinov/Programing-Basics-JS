function volume (input){
    let volume = Number(input[0]); 
    let index = 1; let command = input[index]; 
    let suitcaseCounter = 0; 
    while(command !== "End" && volume > 0){
        let curentAmount = Number(input[index]); 
        index++; 
        //suitcaseCounter++ 
        if (suitcaseCounter % 3 === 0){
            curentAmount *= 1.1;
        } 
        volume -= curentAmount; 
        if(volume < 0){
            console.log('No more space!'); 
            break;
        }
        //volume -= curentAmount 
        if (volume >= 0){
            suitcaseCounter++
        }  
        //suitcaseCounter++;
        command = input[index];
    } 
    if(command === "End"){
        console.log('Congratulations! All suitcases are loaded!')
    }
    console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`)
} 
//volume(["550" , "100" , "252" , "72" , "End"]); // 70 - 80 / 100 atm
volume(["700.5" , "180" , "340.6" , "126" , "220"]);
//volume(["" , "" , "" , "" , "" , ""]);