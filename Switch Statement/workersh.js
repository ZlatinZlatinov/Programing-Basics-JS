function rabotari(input){
    let chas = Number(input[0]); 
    let den = input[1]; 
    if (chas >= 10 && chas <= 18){
        switch(den){
            case "Monday" : 
            case "Tuesday" : 
            case "Wednesday" : 
            case "Thursday" : 
            case "Friday" : 
            case "Saturday" : console.log("open"); break; 
            default : console.log("closed");
        }
    }else{
        console.log("closed"); 
    }
} 
rabotari (["12" , "Sunday"]); 
// 100/100 ezzz