function aluminumJoinery(input) {
    const numJoinery = Number(input[0]);
    const typeJoinery = input[1];
    const typeOfDelyvery = input[2];
   
    const price90X130 = 110;
    const price100X150 = 140;
    const price130X180 = 190;
    const price200X300 = 250;
    const DelyveryPrice = 60;
   
    let totalPrice = 0;
   
    switch (typeJoinery) {
      case "90X130":
        totalPrice = numJoinery * price90X130;
        if (numJoinery > 30 && numJoinery <= 60) {
          totalPrice *= 0.95;
        } else if (numJoinery > 60) {
          totalPrice *= 0.92;   
        }
        break;
      case "100X150":
        totalPrice = numJoinery * price100X150;
        if (numJoinery > 40 && numJoinery <= 80) {
          totalPrice *= 0.94;
        } else if (numJoinery > 80) {
          totalPrice *= 0.9;
             }
        break;
      case "130X180":
        totalPrice = numJoinery * price130X180;
        if (numJoinery > 20 && numJoinery <= 50) {
          totalPrice *= 0.93;
        } else if (numJoinery > 50) {
          totalPrice *= 0.88;
        }
        break;
      case "200X300":
        totalPrice = numJoinery * price200X300;
        if (numJoinery > 25 && numJoinery <= 50) {
          totalPrice *= 0.91;
        } else if (numJoinery > 50) {
          totalPrice *= 0.86;
        }
        break;
    }
    if (typeOfDelyvery == "With delivery" && numJoinery > 99 ) {
        totalPrice += DelyveryPrice; 
        totalPrice *= 0.96; 
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }  
    if (typeOfDelyvery == "With delivery" && numJoinery > 10 && numJoinery <= 99 ){
        totalPrice += DelyveryPrice ;
        console.log(`${totalPrice.toFixed(2)} BGN`);
    } 
    if ( typeOfDelyvery === "Without delivery" && numJoinery > 99 ){
         
         totalPrice *= 0.96; 
       console.log(`${totalPrice.toFixed(2)} BGN`);
     } else if (typeOfDelyvery == "Without delivery" && numJoinery > 10 && numJoinery <= 99){
        
         console.log(`${totalPrice.toFixed(2)} BGN`);
    }  
    if (numJoinery < 10){
        console.log(`Invalid order`);
    }
} // 100 / 100 REWORKED , a few weeks later xdd
//aluminumJoinery (["2" , "130X180" , "With delivery"]); //18/100 not even close xdd reworked
//aluminumJoinery (["40" , "90X130" , "Without delivery"]); 
aluminumJoinery (["105" , "100X150" , "With delivery"]);