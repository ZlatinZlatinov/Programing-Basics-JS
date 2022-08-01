function srednoAritm (input){  
    let index = 1; 
    let devide = Number(input[0]);
    let num = input[index]; 
    let sum = 0;
    while (num !== undefined){ 
        let chislo = Number(input[index]); 
        sum += chislo; 
        index++; 
         

        num = input[index];
    }  
    let avg = sum / devide; 
    console.log(`${avg.toFixed(2)}`); 


} // moje i s for xdd
srednoAritm (["4" , "3" , "2" , "4" , "2"]);