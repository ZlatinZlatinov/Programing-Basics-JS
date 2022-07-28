function numbers (input){
    let index = 0; 
    let pairs = Number(input[index]); 
    index++; 
    let numA = 0; let numB = 0; let sumA = 0;  let sumB = 0;
    for (let i=1; i <= (pairs * 2); i+=2){
        numA = Number(input[i]); 
        index++ ;   
        sumA = numA + numB; 
        sumB = numA + numB; 
        if (sumA != sumB){ 
            if(sumA > sumB){
                console.log(`No, maxdiff = ${sumA}`);
            } else if(sumA < sumB){
                console.log(`No, maxdiff = ${sumB}`);
            }
                //console.log(`Yes, value = ${sumB}`);
            } else{ 
                console.log(`Yes, value = ${sumB}`); 
            }
        //console.log(numA);  
        // let numB = Number(input[i+1]); 
        // index++; 
        // console.log(numB);
        // break;
    }  
    for (let k = 2; k <= (pairs * 2); k+=2){
        numB = Number(input[k]); 
        index++; 
        sumA = numA + numB ; 
        sumB = numA + numB ; 
        if (sumA != sumB){ 
            if(sumA > sumB){
                console.log(`No, maxdiff = ${sumA}`);
            } else if(sumA < sumB){
                console.log(`No, maxdiff = ${sumB}`);
            }
                //console.log(`Yes, value = ${sumB}`);
            } else{ 
                console.log(`Yes, value = ${sumB}`); 
            }  
        // if (sumA == sumB){
        //         console.log(`Yes, value = ${sumB}`);
        //     } else{
        //         if(sumA > sumB){
        //             console.log(`No, maxdiff = ${sumA}`);
        //         } else if(sumA < sumB){
        //             console.log(`No, maxdiff = ${sumB}`);
        //         }
        //     }
          
        //console.log(numB);
        
    }  
    //console.log(sumB);
    // if (sumA == sumB){
    //     console.log(`Yes, value = ${sumB}`);
    // } else{
    //     if(sumA > sumB){
    //         console.log(`No, maxdiff = ${sumA}`);
    //     } else if(sumA < sumB){
    //         console.log(`No, maxdiff = ${sumB}`);
    //     }
    // } 
    // if (sumA != sumB){ 
    //     if(sumA > sumB){
    //         console.log(`No, maxdiff = ${sumA}`);
    //     } else if(sumA < sumB){
    //         console.log(`No, maxdiff = ${sumB}`);
    //     }
    //         //console.log(`Yes, value = ${sumB}`);
    //     } else{ 
    //         console.log(`Yes, value = ${sumB}`);
            // if(sumA > sumB){
            //     console.log(`No, maxdiff = ${sumA}`);
            // } else if(sumA < sumB){
            //     console.log(`No, maxdiff = ${sumB}`);
            // }
        //}
    
} 
//numbers (["3" , "1" , "2" , "0" , "3" , "4" , "-1"]); //, "" , "" , "" , ""]); 
//numbers(["4" , "1" , "1" , "3" , "1" , "2" ,"2" , "0" , "0"]); 
numbers(["4" , "1" , "1" , "3" , "1" , "2" , "2" , "0" , "0"]);