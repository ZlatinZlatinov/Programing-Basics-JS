function paintingEggs (input){ 
    let size = input[0]; 
    let color = input[1]; 
    let count = input[2]; 
    let price = 0; 
    switch (color){
        case "Red" :  
        if( size === "Large"){
            price = 16
        } else if( size === "Medium"){
            price = 13
        } else if( size === "Small"){
            price = 9
        }
        break; 
        case "Green" :  
        if( size === "Large"){
            price = 12
        } else if( size === "Medium"){
            price = 9
        } else if( size === "Small"){
            price = 8
        }
        break; 
        case "Yellow" : 
        if( size === "Large"){
            price = 9
        } else if( size === "Medium"){
            price = 7
        } else if( size === "Small"){
            price = 5
        }
        break;
    } 
    let sum = price * count; 
    let discount = sum * 0.65; 
    console.log(`${discount.toFixed(2)} leva.`);

} // 100 / 100
paintingEggs (["Large" , "Red" , "7"]);