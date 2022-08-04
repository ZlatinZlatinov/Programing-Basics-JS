function catWalking (input){
    let dailyMinutes = Number(input[0]); 
    let countOfWalks = Number(input[1]); 
    let callories = Number(input[2]); 
    const calPerMin = 5; 
    let burnedCallories = dailyMinutes * countOfWalks * calPerMin;  
    let halfCalories = callories / 2;
    if (burnedCallories >= halfCalories){ 
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCallories}.`);
    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCallories}.`);
    }
} // 100/100
catWalking(["30" , "3" , "600"]);