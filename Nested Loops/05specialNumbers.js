function special (input){ 
    let printer = ''; 
    let magicalNumber = Number(input[0]); 
    for( let w = 1; w <= 9; w++){
        for (let x = 1; x <= 9; x++){
            for(let y = 1; y <= 9; y++){
                for(let z = 1; z <= 9; z++){
                    if(magicalNumber % w ===0 && magicalNumber % x === 0 && magicalNumber % y === 0 && magicalNumber % z ===0){
                        printer += "" + w + x + y + z + " "; 
                    }
                }
            }
        }
    } 
    console.log(printer);
} // 100 / 100
special(["3"]); // :P:P