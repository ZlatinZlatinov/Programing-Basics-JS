function amanOtTezCvetqWe (input){
    let magnolii = Number(input[0]); 
    let zumbuli = Number(input[1]); 
    let rozi = Number(input[2]); 
    let kaktusi = Number(input[3]); 
    let cenaPodaruk = Number(input[4]); 
    const magnoliiCena = 3.25;  
    const zumbuliCena = 4;
    const roziCena = 3.50;
    const kaktusiCena = 8; 
    const totalSum = (magnolii * magnoliiCena + zumbuli* zumbuliCena + rozi*roziCena + kaktusi*kaktusiCena)*0.95; 
    if (totalSum < cenaPodaruk){
        let printer = cenaPodaruk - totalSum; 
        console.log(`She will have to borrow ${Math.ceil(printer)} leva.`);//(`She is left with ${Math.floor(printer)} leva.`);
    } else if (totalSum >= cenaPodaruk){
        let printer = totalSum - cenaPodaruk; 
        console.log(`She is left with ${Math.floor(printer)} leva.`);//(`She will have to borrow ${Math.ceil(printer)} leva.`);
    }
} 
amanOtTezCvetqWe(["2" , "3" , "5" , "1" , "50"]); 
amanOtTezCvetqWe(["15" , "7" , "5" , "10" , "100"]); 
// 90/100 някъде в тез заравняванията ще е floor/ceil 
// 100/100 znacite za sravnenie 