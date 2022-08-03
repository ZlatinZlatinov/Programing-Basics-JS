function vakanciq(input){
    let budget = Number(input[0]); 
    let season = input[1]; 
    let cena = 0; 
    if (budget <= 1000){
        //console.log("Camp"); 
        if (season ==="Summer"){ 
            cena = budget * 0.65; 
            console.log(`Alaska - Camp - ${cena.toFixed(2)}`);
            
        } else if (season === "Winter"){
            cena = budget * 0.45; 
            console.log(`Morocco - Camp - ${cena.toFixed(2)}`);
        }
    } else if (budget > 1000 && budget <= 3000){
        if (season ==="Summer"){ 
            cena = budget * 0.80; 
            console.log(`Alaska - Hut - ${cena.toFixed(2)}`);
            
        } else if (season === "Winter"){
            cena = budget * 0.60; 
            console.log(`Morocco - Hut - ${cena.toFixed(2)}`);
        }
    } else if (budget > 3000){
        if (season ==="Summer"){ 
            cena = budget * 0.90; 
            console.log(`Alaska - Hotel - ${cena.toFixed(2)}`);
            
        } else if (season === "Winter"){
            cena = budget * 0.90; 
            console.log(`Morocco - Hotel - ${cena.toFixed(2)}`);
        }
    }
} 
vakanciq(["800" , "Summer"]); 
// 100/100 1st try weee xDDDDD