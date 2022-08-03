function jeepTrackHawck (input){
    let budget = Number(input[0]); 
    let season = input[1]; 
    let cabrrioPrice = 0; let jeepPrice = 0; 
    if (budget <= 100){
        console.log("Economy class"); 
        if (season === "Summer"){ 
            cabrrioPrice = budget * 0.35;
            console.log(`Cabrio - ${cabrrioPrice.toFixed(2)}`);
        } else  if (season === "Winter"){ 
            jeepPrice = budget * 0.65;
            console.log(`Jeep - ${jeepPrice.toFixed(2)}`); 
        }
    } else if (budget > 100 && budget <= 500){ 
        console.log("Compact class"); 
        if (season === "Summer"){ 
            cabrrioPrice = budget * 0.45;
            console.log(`Cabrio - ${cabrrioPrice.toFixed(2)}`);
        } else  if (season === "Winter"){ 
            jeepPrice = budget * 0.80;
            console.log(`Jeep - ${jeepPrice.toFixed(2)}`); 
        }

    } else if (budget > 500){
        console.log("Luxury class"); 
        jeepPrice = budget * 0.90; 
        console.log(`Jeep - ${jeepPrice.toFixed(2)}`)
    }
} 
jeepTrackHawck(["99.99" , "Summer"]); 
// jeepTrackHawck(["450" , "Winter"]); 
// jeepTrackHawck(["1010" , "Summer"]); 
// jeepTrackHawck(["1010" , "Winter"]);  
// 100/100 2nd try