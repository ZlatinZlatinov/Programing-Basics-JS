function carNumber (input){
    let printer = ''; 
    let numberA = Number(input[0]);  
    let numberB = Number(input[1]); 
    for( let w = numberA; w <= numberB; w++){
        for (let x = numberA; x <= numberB; x++){
            for(let y = numberA; y <= numberB; y++){
                for(let z = numberA; z <= numberB; z++){
                    let sborA = x + y;  
                    if (w % 2 === 0 && z % 2 !== 0 && w > z && sborA %2===0){
                        printer += "" + w + x + y + z + " ";
                    } else if(w % 2 !== 0 && z % 2 === 0 && w > z && sborA %2===0){
                        printer += "" + w + x + y + z + " ";
                    }
                }
            }
        }
    } 
    console.log(printer);
} // 100 / 100 si, ezz
carNumber(["2" , "3"]);