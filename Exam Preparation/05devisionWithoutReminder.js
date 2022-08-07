function division (input){
    let startNum = Number(input[0]); 
     
    let p1Counter = 0; // без остатък на 2 
    let p2Counter = 0; // без остатък на 3
    let p3Counter = 0; // без остатък на 4 
    for (let x = 1; x <= startNum; x++){
        let testNum = Number(input[x]); 
        if(testNum % 2 === 0){
            p1Counter++; 
        } 
        if(testNum % 3 === 0){
            p2Counter++; 
        }  
        if(testNum % 4 === 0){
            p3Counter++;
        }
    } 
    let p1Percentage = p1Counter * 100 / startNum; 
    let p2Percentage = p2Counter * 100 / startNum; 
    let p3Percentage = p3Counter * 100 / startNum; 
    console.log(`${p1Percentage.toFixed(2)}%`); 
    console.log(`${p2Percentage.toFixed(2)}%`); 
    console.log(`${p3Percentage.toFixed(2)}%`);
} // 100 / 100
division(["10" , "680" , "2" , "600" , "200" , "800" , "799" , "199" , "46" , "128" , "65"]);