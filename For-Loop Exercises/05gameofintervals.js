function intervali (input){
    let index = 0; 
    let countPlays = Number(input[index]); 
    index++; 
    let r1EndResult = 0 ; let r2zeroNine = 0; let r3ten = 0; 
    let r4twenty = 0; let r5thirty = 0; let r6fourty = 0; let r7invalidNumbers = 0; 
    for( let i = 0 ; i <= countPlays; i++){
        let score = Number(input[index]); 
        index ++; 
        if (score < 0){
            r7invalidNumbers ++; 
            r1EndResult *= 0.5;
        } else if(score >= 0 && score < 10){
            r2zeroNine++; 
            r1EndResult += score * 0.2;
        } else if (score >= 10 && score < 20){
            r3ten++; 
            r1EndResult += score * 0.3;
        } else if (score >= 20 && score <30){
            r4twenty++; 
            r1EndResult += score * 0.4;
        } else if (score >=30 && score < 40){
            r5thirty++; 
            r1EndResult += 50;
        } else if (score >=40 && score <=50){
            r6fourty++;  
            r1EndResult += 100;
        } else if( score > 50){
            r7invalidNumbers ++; 
            r1EndResult *= 0.5;
        }
    } 
    let r2Percentage = r2zeroNine / countPlays * 100 ; 
    let r3Percentage = r3ten / countPlays * 100 ; 
    let r4Percentage = r4twenty / countPlays * 100 ; 
    let r5Percentage = r5thirty / countPlays * 100 ; 
    let r6Percentage = r6fourty / countPlays * 100 ; 
    let r7Percentage = r7invalidNumbers / countPlays * 100 ; 
    console.log(`${r1EndResult.toFixed(2)}`); 
    console.log(`From 0 to 9: ${r2Percentage.toFixed(2)}%`); 
    console.log(`From 10 to 19: ${r3Percentage.toFixed(2)}%`); 
    console.log(`From 20 to 29: ${r4Percentage.toFixed(2)}%`); 
    console.log(`From 30 to 39: ${r5Percentage.toFixed(2)}%`); 
    console.log(`From 40 to 50: ${r6Percentage.toFixed(2)}%`); 
    console.log(`Invalid numbers: ${r7Percentage.toFixed(2)}%`);
} 
intervali (["10" , "43" , "57" , "-12" , "23" , "12" , "0" , "50" , "40" , "30" , "20"]); // 101001010/10101001 Ist tryy
//intervali (["" , "" , "" , "" , "" , "" , "" , "" , "" , "" , ""]);