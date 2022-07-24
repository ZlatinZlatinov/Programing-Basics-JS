function komisionera(input){
    let grad = input[0]; 
    let obemProdajbi = Number(input[1]); 
    let komisionna = ""; 
    if (obemProdajbi < 0){
        console.log("error")
    } else if (obemProdajbi >= 0 && obemProdajbi <=500){
        switch(grad){
            case 'Sofia': 
            komisionna = (obemProdajbi * 0.05).toFixed(2); break; 
            case 'Varna' : 
            komisionna = (obemProdajbi * 0.045).toFixed(2); break; 
            case 'Plovdiv': 
            komisionna = (obemProdajbi * 0.055).toFixed(2); break; 
            default : console.log("error"); break;
        }
    } else if ( obemProdajbi > 500 && obemProdajbi <= 1000){
        switch(grad){
            case 'Sofia': 
            komisionna = (obemProdajbi * 0.07).toFixed(2); break; 
            case 'Varna' : 
            komisionna = (obemProdajbi * 0.075).toFixed(2); break; 
            case 'Plovdiv': 
            komisionna = (obemProdajbi * 0.08).toFixed(2); break; 
            default : console.log("error"); break;
        }
    } else if (obemProdajbi > 1000 && obemProdajbi <= 10000){
        switch(grad){
            case 'Sofia' : 
            komisionna = (obemProdajbi * 0.08).toFixed(2); break; 
            case 'Varna' : 
            komisionna = (obemProdajbi * 0.10).toFixed(2); break; 
            case 'Plovdiv' : 
            komisionna = (obemProdajbi * 0.12).toFixed(2); break; 
            default : console.log("error"); break; 
        }
    } else if (obemProdajbi > 10000){
        switch(grad){
            case 'Sofia': 
            komisionna = (obemProdajbi * 0.12).toFixed(2); break; 
            case 'Varna' : 
            komisionna = (obemProdajbi * 0.13).toFixed(2); break; 
            case 'Plovdiv': 
            komisionna = (obemProdajbi * 0.145).toFixed(2); break; 
            default : console.log("error"); break; 
        }
     } else {
        console.log("error"); 
        
    }

    console.log(komisionna);
} 
komisionera(["yuff" , "-50"]); 
// 100/100 3rd time trqa da e sys && i promenlivata sys let prom = ""