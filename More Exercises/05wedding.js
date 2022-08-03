function svatbaBulka (input){
    let countMen = Number(input[0]); 
    let countWomen = Number(input[1]); 
    let countTables = Number(input[2]); 
    let printer = ''; counter = 0;
    for( let x = 1; x <= countMen; x++){ 
        
        for (let y = 1; y <= countWomen; y++){  
            counter++;
            printer +=`(${x} <-> ${y}) `; 
            if( counter === countTables){
                 break;
            }
        } 
        if( counter === countTables){
            break;
       }  
    } 
    console.log(printer);
} // 100/100 siiiedowemodwed woooo
svatbaBulka(["2" , "2" , "1"]);