function toristoShope (input){
    let budget = Number(input[0]); 
    let index = 1; 
    let command = input[index]; 
    let bill = 0; let  productCounter = 0;
    while(command !== "Stop"){
        let productName = input[index]; 
        index++;  
        productCounter++;
        let productPrice = Number(input[index]); 
        index++;  
 
        if( productCounter % 3 === 0){
            productPrice /= 2;
        }
        if (budget < productPrice){
            console.log(`You don't have enough money!`);
            let diff = productPrice - budget; 
            console.log(`You need ${diff.toFixed(2)} leva!`); 
            break;
        }
        bill += productPrice;
        budget -= productPrice; 

        command = input[index];
    }  
    if (command === "Stop"){
        console.log(`You bought ${productCounter} products for ${bill.toFixed(2)} leva.`);
    }
} // 100 / 100
toristoShope(["153.20" , "Backpack" , "25.20" , "Shoes" , "54" , "Sunglasses" , "30" , "Stop"]);  
//toristoShope(["54" , "Thermal underwear" , "24" , "Sunscreen" , "45"]); //, "" , "" , ""]);
//toristoShope(["" , "" , "" , "" , "" , "" , "" , ""]);