function dogsCats (input){
    let countOfDays = Number(input[0]); 
    let foodAmount = Number(input[1]); 
    let index = 2; 
    let command = Number(input[index]); 
    let dayCounter = 0; let dogPercentage = 0; 
    let biscuits = 0; let catPercentage = 0; 
    let totalPercentage = 0;
    while ( command >= (countOfDays * 2)){ 
        dayCounter++;
        let dogFood = Number(input[index]); 
        index++; 
        let catFood = Number(input[index]); 
        index++;  
        totalPercentage += (dogFood + catFood);
        dogPercentage += dogFood; 
        catPercentage += catFood;
        if ( dayCounter % 3 === 0){
            biscuits += (dogFood + catFood)*0.1 ;
        }  
        command = Number(input[index]);
    } 
    let totalPrint = (totalPercentage * 100) / foodAmount; 
    let dogPrint = (dogPercentage * 100) / totalPercentage; 
    let catPrint = (catPercentage * 100) / totalPercentage; 
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`); 
    console.log(`${totalPrint.toFixed(2)}% of the food has been eaten.`); 
    console.log(`${dogPrint.toFixed(2)}% eaten from the dog.`); 
    console.log(`${catPrint.toFixed(2)}% eaten from the cat.`);
} // 100/ 100
dogsCats(["3" , "1000" , "300" , "20" , "100" , "30" , "110" , "40"]);