function luckyNumbers (input){
    let printer = ''; 
    let magicalNumber = Number(input[0]); 
    for( let w = 1; w <= 9; w++){
        for (let x = 1; x <= 9; x++){
            for(let y = 1; y <= 9; y++){
                for(let z = 1; z <= 9; z++){
                    let sborA = w + x; 
                    let sborB = y + z; 
                    if (sborA === sborB && magicalNumber % sborA === 0){
                        printer += "" + w + x + y + z + " ";
                    }
                }
            }
        }
    } 
    console.log(printer);
} // 100/100 siiuu
luckyNumbers(["3"]);
