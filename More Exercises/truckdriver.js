function scania(input){
    let season = input[0]; 
    let kilometers = Number(input[1]); 
    let bruto = 0; let neto = 0;
    if (kilometers <= 5000 && (season === "Spring" || season=== "Autumn" || season === "Summer" || season === "Winter")){
        bruto = 0.75 * kilometers; 
        if (season === "Summer"){
            bruto = 0.90 * kilometers;
        } else if (season === "Winter"){
            bruto = 1.05 * kilometers;
        }
    } 
    if (kilometers > 5000 && kilometers <= 10000 && (season === "Spring" || season=== "Autumn" || season === "Summer" || season === "Winter")){
        bruto = 0.95 * kilometers; 
        if (season === "Summer"){
            bruto = 1.10 * kilometers;
        } else if (season === "Winter"){
            bruto = 1.25 * kilometers;
        }
    } 
    if (kilometers > 10000 && kilometers <= 20000){
        bruto = 1.45 * kilometers;
    } 
    neto = (bruto * 4)* 0.90; 
    console.log(`${neto.toFixed(2)}`); 

} 
scania(["Summer" , "3455"]); 
scania(["Winter" , "4350"]); 
scania(["Spring" , "1600"]); 
// 100/100 1st try Si, ezz :D:D