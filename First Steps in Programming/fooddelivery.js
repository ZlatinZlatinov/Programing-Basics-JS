function foodDelivery(input) {
    // needed stuff 
  const chickenMenuPrice = 10.35; 
  const fishMenuPrice = 12.4; 
  const veggieMenuPrice = 8.15; 
  const deliveryPrice = 2.5; 
  const costPercentageOfTotalSum = 0.2

  // input from user 
  const chickenMenuCount = Number(input[0]); 
  const fishMenuCount = Number(input[1]); 
  const veggieMenuCount = Number(input[2]); 
  //solution 
  const chickenMealPrice = chickenMenuCount * chickenMenuPrice; 
  const fishMealPrice = fishMenuCount * fishMenuPrice; 
  const veggieMealPrice = veggieMenuCount * veggieMenuPrice; 
  
  const totalMealPrice = chickenMealPrice + fishMealPrice + veggieMealPrice; 
  const desertPrice = totalMealPrice * costPercentageOfTotalSum; 
  const finalPrice = totalMealPrice + desertPrice + deliveryPrice; 
  console.log(finalPrice); 



} 
foodDelivery(["2 " , "4 " , "3"]); 

//malii 4ovek taz trugna ot 1viq put 100/100