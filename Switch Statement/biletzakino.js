// функция да приема ден от седмицата и да отпечатва колко струва билета за кино 
function biletKino(input){
    let den = input[0]; 
    if (den=='Monday' || den == 'Tuesday' || den == 'Friday'){
        console.log("12");
    } else if(den == 'Wednesday' || den == 'Thursday'){ 
        console.log("14"); 
    } else if(den == 'Saturday' || den == 'Sunday'){
        console.log("16");
    }
} 
biletKino(["Sunday"]); 
// логическо или || 
// 100/100 mn qsno
