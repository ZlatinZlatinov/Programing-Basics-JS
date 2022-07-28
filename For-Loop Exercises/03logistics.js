function ekont (input){
    let index = 0; 
    let broiTovari = Number(input[index]); 
    index++; let sumTonove = 0;
    let cena = 0;  let r3Truck = 0;
    let r2Bus = 0;  let r4Train = 0; 
    for( let i = 1; i <= broiTovari; i++){
        sumTonove += Number(input[i]); 
        let tonaj = Number(input[index]); 
        index ++; 
        if( tonaj <= 3){ 
            r2Bus += tonaj ; 
            cena += tonaj * 200;
        } else if (tonaj >=4 && tonaj <= 11){
            r3Truck += tonaj; 
            cena += tonaj*175;
        } else if (tonaj >=12){
            r4Train += tonaj; 
            cena +=tonaj*120;
        } 
        //console.log(tonaj);
    } 
    let r2percentage = r2Bus / sumTonove * 100 ; // /200 za procenti 
    let r3percentage = r3Truck / sumTonove * 100; 
    let r4percentage = r4Train / sumTonove * 100; 
    let averagePrice = cena / sumTonove; 
    console.log(`${averagePrice.toFixed(2)}`); 
    console.log(`${r2percentage.toFixed(2)}%`); 
    console.log(`${r3percentage.toFixed(2)}%`); 
    console.log(`${r4percentage.toFixed(2)}%`);
} 
ekont (["4" , "1" , "5" , "16" , "3"]); // 100/100 1st try , ezzz