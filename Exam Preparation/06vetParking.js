function parking (input){
    let days = Number(input[0]); 
    let hours = Number(input[1]);  
    let totalSum = 0;
    for(let x = 1; x <= days; x++){ 
        let tax = 0;
        for(let y = 1; y <= hours; y++){
            if ( x % 2 === 0 && y % 2 > 0){
                tax += 2.50;
            } else if ( x % 2 === 0 && y % 2 === 0){
                tax += 1;
            }
            if ( x % 2 > 0 && y % 2 === 0){
                tax += 1.25;
            } else if ( x % 2 > 0 && y % 2 > 0){
                tax += 1;
            }
        } 
    totalSum += tax
    console.log(`Day: ${x} - ${tax.toFixed(2)} leva`);
    } 
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
} // 100 / 100 si , ez
//parking(["2" , "5"]); 
parking(["5" , "2"]); 