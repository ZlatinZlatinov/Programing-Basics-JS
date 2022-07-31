function moneti (input){
    let resto = input[0]; 
    let preobrazuvano = parseInt(resto * 100); // moje v na4aloto da se dobavi i parseInt - pravi go v cqlo 4islo 
    let moneti = 0; 
    while (preobrazuvano > 0){
        if (preobrazuvano - 200 >= 0){
            moneti++; 
            preobrazuvano -= 200;
        } else if (preobrazuvano - 100 >= 0){
            moneti++; 
            preobrazuvano -= 100;
        } else if (preobrazuvano - 50 >= 0){
            moneti++; 
            preobrazuvano -= 50;
        } else if (preobrazuvano - 20 >= 0){
            moneti++; 
            preobrazuvano -= 20;
        } else if (preobrazuvano - 10 >= 0){
            moneti++; 
            preobrazuvano -= 10;
        } else if (preobrazuvano - 5 >= 0){
            moneti++; 
            preobrazuvano -= 5;
        } else if (preobrazuvano - 2 >= 0){
            moneti++; 
            preobrazuvano -= 2; 
        } else if (preobrazuvano - 1 >= 0){
            moneti++; 
            preobrazuvano -= 1;
        }
    } 
    console.log(moneti);
} // 100/100 sas parseint oba4e
moneti(["1.23"]);