function inDaClub(input) { 
    let neededSum = Number(input[0]); 
    let index = 1; 
    let command = input[index]; 
    let finalSum = 0; 
    while (command !== "Party!") {
        let name = input[index]; 
        index++; 
        let count = Number(input[index]); 
        index++; 
        let price = Number(name.length) * count; 
        if (price % 2 !== 0){
            price *= 0.75;
        } 
        finalSum += price; 
        if ( finalSum >= neededSum){
            console.log('Target acquired.'); 
            break;
        }
        command = input[index];
    }  
    if (command === "Party!"){ 
        let diff = neededSum - finalSum;
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    } 
    console.log(`Club income - ${finalSum.toFixed(2)} leva.`);
    
} // 100 / 100
inDaClub (["500" , "Bellini" ,"6", "Bamboo" , "7" , "Party"]); 
//inDaClub (["100" , "Sidecar" , "7" , "Mojito" , "5" , "White Russian" , "10"]);