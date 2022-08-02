function smetki (input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]); 
    let printerHp = 0; let laserenPrinter = 0; 
    for( let x = startNumber; x <= endNumber; x++){
        let tekushtoChislo = '' + x; 
        for(let y = 0; y < tekushtoChislo.length; y++ ){
            let tekushSimvol = Number(tekushtoChislo.charAt(y)); 
            if(tekushSimvol * 2 === 4){
                printerHp++;
            } else{
                laserenPrinter++;
            }
        }
    } 
    console.log(`HP: ${printerHp}`); 
    console.log(`Laser: ${laserenPrinter}`); // ook seems to work xdd

} 
smetki(["100000" , "100060"]);