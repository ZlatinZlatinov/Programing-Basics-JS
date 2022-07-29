function summoffnums (input){
    let index = 0; 
    let num = Number(input[index]); 
    index++;
    let sum = 0; 
    while ( sum < num){
        let k = Number(input[index]); 
        sum += k; 
        index++;
    } 
    console.log(sum);
} 
summoffnums(["100","10","20","30","40"]); 
summoffnums(["20","1","2","3","4","5","6"]); //100/100

