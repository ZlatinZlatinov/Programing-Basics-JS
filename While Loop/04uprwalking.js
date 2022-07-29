function hodene(input){ 
    let index = 0;
    let steps = input[index]; 
    let sumOfSteps = 0; 
    let goal = 10000; 
    let lastnum = 0;
    while(sumOfSteps <= goal){ 
        let stupki = Number(steps); 
        sumOfSteps += stupki; 
        index++;  
        steps = input[index];  
        
        if (steps === "Going home"){ 
            lastnum = Number(input[index+1]);
            //sumOfSteps += stupki 
            break;
            
        } 
        //sumOfSteps += stupki
        
        
    } 
    let finalSteps = sumOfSteps + lastnum; 
    let diff = Math.abs(goal - finalSteps); 
    if( finalSteps >= goal){
        console.log('Goal reached! Good job!'); 
        console.log(`${diff} steps over the goal!`);
    } else if( finalSteps < goal){
        console.log('Going home'); 
        console.log(`${diff} more steps to reach goal.`)
    }
    //console.log(finalSteps); e tui moi da stane dea xdd
    //console.log(lastnum);

} 
hodene(["1000","1500","2000","6500"]); // 70 /100 2nd try xd
hodene(["1500","300","2500","3000","Going home","200"]);

