function smartlilly (input){
    let age = Number(input[0]); 
    let priceWashingmachine = Number(input[1]); 
    let toyPrice = Number(input[2]); 
    let money = 0; let toyCounter = 0; let tempMoney = 10; 
    for (let i = 1; i <= age ; i++){
        if(i % 2 === 0){
            money += tempMoney; 
            tempMoney += 10; 
            money -=1;
        } else{
            toyCounter++;
        }
    }  
     
    
    money += toyCounter * toyPrice; 
    
    let difference = Math.abs(money - priceWashingmachine); 
     if(money >= priceWashingmachine){
         console.log(`Yes! ${difference.toFixed(2)}`);
    } else{
         console.log(`No! ${difference.toFixed(2)}`)
    } 
} 
smartlilly(["10","170.00","6"]); // 100/100 lol
smartlilly(["21","1570.98","3"]);

