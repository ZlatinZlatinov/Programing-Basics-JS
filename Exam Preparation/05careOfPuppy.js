function puppy (input){
    let givenFood = Number(input[0]); 
    let foodToGrams = givenFood * 1000; 
    let index = 1; 
    let command = input[index]; 
    while(command !== "Adopted"){
        let curentAmount = Number(input[index]); 
        index++; 
        foodToGrams -= curentAmount;
        command = input[index];
    } 
    if(foodToGrams >= 0){
        console.log(`Food is enough! Leftovers: ${foodToGrams} grams.`);
    } else{
        console.log(`Food is not enough. You need ${Math.abs(foodToGrams)} grams more.`);
    }
} // 100 / 100
//puppy(["4" , "130" , "345" , "400" , "180" , "230" , "120" , "Adopted"]); 
puppy(["2" , "999" , "456" , "999" , "999" , "123" , "456" , "Adopted"]);
//puppy(["" , "" , "" , "" , "" , "" , "" , ""]);